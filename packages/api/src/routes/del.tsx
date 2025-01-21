import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Context } from "hono";
import { generateInvoice, invoiceData } from "./transactions/events/create-invoice";
import { DateTime } from "luxon";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    // fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  infoRow: {
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    // fontFamily: "Helvetica-Bold",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  col: {
    flex: 1,
  },
  table: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
    marginBottom: 10,
    // fontFamily: "Helvetica-Bold",
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  description: { width: "40%" },
  quantity: { width: "20%" },
  price: { width: "20%" },
  amount: { width: "20%", textAlign: "right" },
  totals: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  totalRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  totalLabel: {
    fontFamily: "Helvetica-Bold",
    marginRight: 20,
  },
  notes: {
    marginTop: 40,
    fontSize: 10,
    color: "#666",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    color: "#666",
  },
});

// Create Document Component
export const MyDocument = (data) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>INVOICE</Text>
        <Text style={styles.infoRow}>
          Invoice Number: {data.invoiceNumber}
        </Text>
        <Text style={styles.infoRow}>
          Issue Date:{" "}
          {DateTime.fromJSDate(data.issueDate).toFormat("MMM dd, yyyy")}
        </Text>
        <Text style={styles.infoRow}>
          Due Date:{" "}
          {DateTime.fromJSDate(data.dueDate).toFormat("MMM dd, yyyy")}
        </Text>
      </View>

      {/* Merchant and Customer Details */}
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.sectionTitle}>From:</Text>
          <Text>{data.merchantDetails.name}</Text>
          <Text>{data.merchantDetails.address}</Text>
          <Text>{data.merchantDetails.email}</Text>
          {data.merchantDetails.vatNumber && (
            <Text>VAT: {data.merchantDetails.vatNumber}</Text>
          )}
        </View>
        <View style={styles.col}>
          <Text style={styles.sectionTitle}>Bill To:</Text>
          <Text>{data.customerDetails.name}</Text>
          <Text>{data.customerDetails.address}</Text>
          <Text>{data.customerDetails.email}</Text>
          {data.customerDetails.vatNumber && (
            <Text>VAT: {data.customerDetails.vatNumber}</Text>
          )}
        </View>
      </View>

      {/* Items Table */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.quantity}>Quantity</Text>
          <Text style={styles.price}>Unit Price</Text>
          <Text style={styles.amount}>Amount</Text>
        </View>

        {data.items.map((item, index) => {
          const amount = item.quantity * item.unitPrice;
          return (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <Text style={styles.price}>
                {formatCurrency(item.unitPrice, data.currency)}
              </Text>
              <Text style={styles.amount}>
                {formatCurrency(amount, data.currency)}
              </Text>
            </View>
          );
        })}
      </View>

      

      {/* Notes */}
      {data.notes && (
        <View style={styles.notes}>
          <Text style={styles.sectionTitle}>Notes:</Text>
          <Text>{data.notes}</Text>
        </View>
      )}

      {/* Footer */}
      <Text style={styles.footer}>Thank you for your business!</Text>
    </Page>
  </Document>
);

// Test endpoint
export const testRoute = async (c: Context) => {
  //     console.log("Starting PDF generation");
  //     const pdfBuffer = await generatePDF();
  //     console.log("PDF generated successfully, size:", pdfBuffer.length);

  //     c.header("Content-Type", "application/pdf");
  //     c.header("Content-Disposition", "inline; filename=test.pdf");

  //     return c.body(pdfBuffer);
  //   } catch (error) {
  //     console.error("Detailed error:", error);
  //     return c.text(`Error generating PDF: ${error.message}`, 500);
  //   }
  return generateInvoice(c)
  // return c.html(<MyDocument data={invoiceData} />);
};

// In your main application file:
// app.get("/test", testRoute);
