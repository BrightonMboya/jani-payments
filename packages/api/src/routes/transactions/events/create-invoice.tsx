import { type Context } from "hono";
import { PdfTemplate } from "./invoice";
import { TemplateProps } from "./invoice/types";
import { pdf } from "@react-pdf/renderer";
import { fetchInvoiceDetails } from "./invoice/fetch-invoice-details";


export async function generateInvoice(c: Context) {
  try {
    const details: TemplateProps = await fetchInvoiceDetails("passTheTransactionId");
    // Create a PDF document
    const doc = pdf(<PdfTemplate {...details} />);
  

    // Convert to buffer
    const buffer = await doc.toBuffer();

    // Set headers for PDF preview
    c.header("Content-Type", "application/pdf");
    // c.header("Content-Disposition", "inline; filename=invoice.pdf");


    // Return the PDF buffer
    return c.body(buffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return c.text("Error generating PDF: " + error.message, 500);
  }
}
