import { type Context } from "hono";
import { PdfTemplate } from "./invoice";
import { TemplateProps } from "./invoice/types";
import { pdf } from "@react-pdf/renderer";


export async function generateInvoice(c: Context) {
  try {
    // Create a PDF document
    const doc = pdf(<PdfTemplate {...dummyData} />);

    // Convert to buffer
    const buffer = await doc.toBuffer();

    // Set headers for PDF preview
    c.header("Content-Type", "application/pdf");
    c.header("Content-Disposition", "inline; filename=invoice.pdf");
    // c.header("Content-Length", buffer.length.toString());

    // Return the PDF buffer
    return c.body(buffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return c.text("Error generating PDF: " + error.message, 500);
  }
}
export const dummyData: TemplateProps = {
  invoice_number: "INV-2024-0001",
  issue_date: "2024-01-21",
  due_date: "2024-02-21",
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
  line_items: [
    {
      name: "Web Development Services",
      quantity: 80,
      price: 150.0,
    },
    {
      name: "UI/UX Design",
      quantity: 40,
      price: 120.0,
    },
    {
      name: "Database Implementation",
      quantity: 20,
      price: 200.0,
    },
  ],
  customer_details: {
    name: "Acme Corporation",
    attention: "John Smith",
    address: "123 Business Avenue",
    city: "Tech City",
    state: "TC",
    zip: "12345",
    country: "United States",
    email: "billing@acmecorp.com",
    phone: "+1 (555) 123-4567",
  } as unknown as JSON,
  from_details: {
    company: "DevTech Solutions",
    name: "Sarah Johnson",
    address: "456 Developer Lane",
    city: "Code City",
    state: "CC",
    zip: "67890",
    country: "United States",
    email: "invoicing@devtech.com",
    phone: "+1 (555) 987-6543",
  } as unknown as JSON,
  payment_details: {
    bank_name: "TechBank International",
    account_name: "DevTech Solutions Ltd",
    account_number: "****3456",
    routing_number: "***789",
    swift_code: "TECHBANK",
    payment_terms: "Net 30",
    accepted_methods: ["Bank Transfer", "Credit Card"],
  } as unknown as JSON,
  note_details: {
    content:
      "Thank you for your business! Please make sure to include the invoice number with your payment. For any questions, contact our billing department.",
    payment_instructions: "Please process payment within the specified terms.",
    late_fees: "Late payments are subject to a 1.5% monthly fee.",
  } as unknown as JSON,
  currency: "USD",
  amount: 18400.0, // Calculated from line items: (80*150 + 40*120 + 20*200)
  customer_name: "Acme Corporation",
  vat: 3680.0, // 20% of amount
  tax: 1840.0, // 10% of amount
  width: 595.28, // A4 width in points
  height: 841.89, // A4 height in points
  token: "mock_token_12345",
  size: "a4",
};
