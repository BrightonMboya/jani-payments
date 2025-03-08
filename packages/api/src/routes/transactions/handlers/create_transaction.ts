import { Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { CreateTransaction } from "../transaction.routes";
import { createTransactionSchema, transformTransaction } from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";
import { Resource } from "sst";
import { bus } from "sst/aws/bus";
import { TransactionEvent } from "../events/event-defintion";
import { randomBytes } from "crypto";
import { calculateTransactionTotals } from "../fns";
import { db } from "@repo/db";
import { eq, and } from "drizzle-orm";
import * as schema from "@repo/db/db/schema.ts";

const create_transaction: APPRouteHandler<CreateTransaction> = async (
  c: Context
) => {
  const input = createTransactionSchema.parse(await c.req.json());

  const transaction_id = `txn_${crypto.randomUUID()}`;
  const invoice_id = `INV-${randomBytes(12)}`;

  // is there a need to do this inside a transaction??
  const { grandTotal, subtotal, discountAmount, prices } =
    await calculateTransactionTotals(input, c);

  const transaction = await db.transaction(async (tx) => {
    // insert into the main transaction table
    await tx.insert(schema.Transactions).values({
      id: transaction_id,
      status: input.status,
      customer_id: input.customer_id,
      address_id: input.address_id,
      project_id: c.get("organization_Id"),
      product_id: prices[0].Products!.id, // Using first product as main product
      currency_code: input.currency_code,
      subscription_id: input.subscription_id,
      discount_id: input.discount_id,
      collection_mode: input.collection_mode ?? "automatic",
      custom_data: input.custom_data as any,
      current_period_starts: input.current_billing_period?.starts_at,
      current_period_ends: input.current_billing_period?.ends_at,
      subtotal: subtotal,
      discount_ammount: discountAmount.toString(),
      total: subtotal,
      grand_total: grandTotal.toString(),
      invoice_id,
    });

    // insert into transactionitems table
    type txnItemsData = typeof schema.TransactionItems.$inferInsert;
    const transactionItemsData: txnItemsData[] = input.items.map((item) => ({
      id: `${crypto.randomUUID()}`,
      transaction_id,
      price_id: item.price_id,
      quantity: item.quantity,
    }));

    await tx.insert(schema.TransactionItems).values(transactionItemsData);

    type txnPaymentType = typeof schema.TransactionPayment.$inferInsert;
    const txnPaymentData: txnPaymentType = {
      id: crypto.randomUUID(),
      transaction_id,
      payment_method: input.payment_details.payment_method,
      payment_provider: input.payment_details.payment_provider,
      amount: grandTotal.toString(),
      currency_code: input.currency_code,
      status: "PENDING",
      ...(input.payment_details.payment_method === "MOBILE_MONEY" && {
        mobile_network: input.payment_details.mobile_network,
        phone_suffix: input.payment_details.phone_suffix,
      }),
      ...(input.payment_details.payment_method === "CARD" && {
        card_last4: input.payment_details.card_last4,
        card_brand: input.payment_details.card_brand,
        card_exp_month: input.payment_details.card_exp_month,
        card_exp_year: input.payment_details.card_exp_year,
        card_holder_name: input.payment_details.card_holder_name,
      }),
      ...(input.payment_details.payment_method === "BANK_TRANSFER" && {
        bank_name: input.payment_details.bank_name,
        bank_reference: input.payment_details.bank_reference,
      }),
    };

    // insert into the transactionpayment table
    await tx.insert(schema.TransactionPayment).values(txnPaymentData);

    // finally return the txn with the related records
    return await tx.query.Transactions.findFirst({
      where: and(
        eq(schema.Transactions.id, transaction_id),
        eq(schema.Transactions.project_id, c.get("organization_Id"))
      ),
      with: {
        transactionItems: {
          with: {
            price: {
              with: {
                Products: true,
              },
            },
          },
        },
        address: true,
        discount: {
          with: {
            discount_prices: {
              columns: {
                price_id: true,
              },
            },
          },
        },
        customer: true,
        TransactionPayment: true,
      },
    });
  });

  bus.publish(Resource.Bus, TransactionEvent.Created, {
    subscription_id: input.subscription_id!,
    c: c,
    is_first_payment: true,
    discount_id: input.discount_id,
  });

  const formattedTransaction = transformTransaction(transaction as any);
  return c.json(formattedTransaction, HttpStatusCodes.OK);
};

export default create_transaction;
