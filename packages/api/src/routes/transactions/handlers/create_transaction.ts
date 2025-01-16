import { PrismaClient } from "@repo/db/types";
import { Context } from "hono";
import { APPRouteHandler } from "~/lib/types";
import { CreateTransaction } from "../transaction.routes";
import {
  calculateDiscountAmount,
  createTransactionSchema,
  GetTransactionInclude,
  transformTransaction,
} from "../helpers";
import * as HttpStatusCodes from "~/lib/http-status-code";

const create_transaction: APPRouteHandler<CreateTransaction> = async (
  c: Context
) => {
  const db: PrismaClient = c.get("db");
  const input = createTransactionSchema.parse(await c.req.json());
  const projectId = c.get("project_id");

  
  const transaction = await db.$transaction(async (tx) => {
    const transaction_id = `txn_${crypto.randomUUID()}`;
    const invoice_id = `inv_${crypto.randomUUID()}`; // u should send this to the event queue to create an invoice, maybe take it above this txn
    // Verify all prices belong to the same project
    const prices = await db.prices.findMany({
      where: {
        id: {
          in: input.items.map((item) => item.price_id),
        },
        projectId,
      },
      include: {
        Products: true,
      },
    });

    if (prices.length !== input.items.length) {
      throw new Error(
        "One or more prices not found or don't belong to this project"
      );
      // return c.json(
      //   {
      //     error: "Not Found",
      //     message:
      //       "One or more prices not found or don't belong to this project",
      //   } satisfies z.infer<typeof ErrorSchema>,
      //   HttpStatusCodes.NOT_FOUND
      // );
    }
    // calculate totals
    const subtotal = input.items.reduce((acc, item) => {
      const price = prices.find((p) => p.id === item.price_id);
      if (!price) throw new Error("Price not found");
      return acc + Number(price.amount) * item.quantity;
    }, 0);

    // 3. Handle discount if provided
    let discountAmount = 0;
    if (input.discount_id) {
      const discount = await db.discounts.findFirst({
        where: {
          id: input.discount_id,
          projectId,
          status: "active",
        },
      });

      if (!discount) {
        throw new Error("Provided Discount Id Not Found or Inactive")
        // return c.json(
        //   {
        //     error: "Not Found",
        //     message: "Discount not found or inactive",
        //   } satisfies z.infer<typeof ErrorSchema>,
        //   HttpStatusCodes.NOT_FOUND
        // );
      }

      // Calculate discount amount based on type
      discountAmount = calculateDiscountAmount(
        discount,
        subtotal,
        input.items.reduce((acc, item) => acc + item.quantity, 0)
      );
    }
    const grandTotal = subtotal - discountAmount;
    return await tx.transactions.create({
      data: {
        id: transaction_id,
        status: input.status,
        customer_id: input.customer_id,
        address_id: input.address_id,
        project_id: projectId,
        product_id: prices[0].Products!.id, // Using first product as main product
        currency_code: input.currency_code,
        subscription_id: input.subscription_id,
        discount_id: input.discount_id,
        collection_mode: input.collection_mode ?? "automatic", 
        custom_data: input.custom_data as any,
        current_period_starts: input.current_billing_period?.starts_at,
        current_period_ends: input.current_billing_period?.ends_at,
        subtotal: subtotal,
        discount_ammount: discountAmount,
        total: subtotal,
        grand_total: grandTotal,
        invoice_id,
        transactionItems: {
          create: input.items.map((item) => ({
            price_id: item.price_id,
            quantity: Number(item.quantity),
          })),
        },
        TransactionPayment: {
          create: {
            payment_method: input.payment_details.payment_method,
            payment_provider: input.payment_details.payment_provider,
            amount: grandTotal,
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
          },
        },
      },
      include: GetTransactionInclude,
    });
  });

  const formattedTransaction = transformTransaction(transaction);
  return c.json(formattedTransaction, HttpStatusCodes.OK);
};


export default create_transaction;