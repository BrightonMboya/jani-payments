import { db } from "@repo/db";
import * as schema from "@repo/db/db/schema.ts";
import { TemplateProps } from "./types";
import { eq } from "drizzle-orm";

export async function fetchInvoiceDetails(transactionId: string) {
  const transaction = await db.query.Transactions.findFirst({
    where: eq(schema.Transactions.id, transactionId),
    with: {
      address: {
        columns: {
          firstLine: true,
          city: true,
        },
      },
      TransactionPayment: true,
      transactionItems: {
        with: {
          price: {
            columns: {
              name: true,
              amount: true,
            },
          },
        },
      },
      customer: {
        columns: {
          name: true,
          email: true,
        },
      },
    },
  });
  

  if (!transaction) {
    return "No Transaction found with the Id";
  }

  const transactionItems = transaction.transactionItems.map((item) => {
    return {
      name: item.price.name,
      quantity: Number(item.quantity),
      price: Number(item.price.amount),
    };
  });


  const invoiceDetails: TemplateProps = {
    invoice_number: transaction?.invoice_id,
    issue_date: transaction.created_at,
    // due_date: transaction.created_at.toISOString(),
    template: {
      logo_url: "https://placeholder.co/100x100.png",
      from_label: "From",
      customer_label: "Bill To",
      invoice_no_label: "Invoice No.",
      issue_date_label: "Issue Date",
      due_date_label: "Due Date",
      date_format: "MM/DD/YYYY",
      payment_label: "Payment Details",
      note_label: "Notes",
      description_label: "Description",
      quantity_label: "Quantity",
      price_label: "Price",
      total_label: "Total Amount",
      tax_label: "Tax (10%)",
      vat_label: "VAT (20%)",
    },
    line_items: transactionItems,
    customer_name: transaction.customer.name,
    customer_details: {
      name: transaction.customer.name,
      email: transaction.customer.email,
      first_line: transaction.address.firstLine,
    } as unknown as JSON,
    payment_details: {
      bank_name: transaction.TransactionPayment[0].bank_name ||
        transaction.TransactionPayment[0].mobile_network,
      account_number: transaction.TransactionPayment[0].card_last4 ||
        transaction.TransactionPayment[0].phone_suffix,
      accepted_methods: [transaction.TransactionPayment[0].payment_provider],
    } as unknown as JSON,
    currency: transaction.currency_code,
    amount: Number(transaction.grand_total),
    width: 595.28, // A4 width in points
    height: 841.89, // A4 height in points
    token: "",
    size: "a4",
    due_date: ""
  };

  return invoiceDetails;
}
