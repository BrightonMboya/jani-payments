import { db } from "~/middleware/with-db";
import { TemplateProps } from "./types";


export async function fetchInvoiceDetails(transactionId: string) {
  const transaction = await db.transactions.findUnique({
    where: {
      id: "txn_248cb851-6265-484b-a448-d0bf55d0af05",
    },
    include: {
      address: {
        select: {
          first_line: true,
          city: true,
        },
      },
      TransactionPayment: true,
      transactionItems: {
        include: {
          price: {
            select: {
              name: true,
              amount: true,
            },
          },
        },
      },
      customer: {
        select: {
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
    issue_date: transaction.created_at.toISOString(),
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
      first_line: transaction.address.first_line,
    } as unknown as JSON,
    payment_details: {
      bank_name:
        transaction.TransactionPayment?.bank_name ||
        transaction.TransactionPayment?.mobile_network,
      account_number:
        transaction.TransactionPayment?.card_last4 ||
        transaction.TransactionPayment?.phone_suffix,
      accepted_methods: [transaction.TransactionPayment?.payment_provider],
    } as unknown as JSON,
    currency: transaction.currency_code,
    amount: Number(transaction.grand_total),
    width: 595.28, // A4 width in points
    height: 841.89, // A4 height in points
    token: "",
    size: "a4",
  };

  return invoiceDetails;
}
