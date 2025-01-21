import { Link, Text, View } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";

type PDFTextStyle = Style & {
  fontFamily?: string;
  fontStyle?: "normal" | "italic" | "oblique";
  textDecoration?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
};
export function formatEditorContent(content?: any): JSX.Element | null {
  if (!content) {
    return null;
  }

  // Parse JSON if it's a string
  const data = typeof content === "string" ? JSON.parse(content) : content;

  // Convert object to array of key-value pairs
  const entries = Object.entries(data);

  return (
    <>
      {entries.map(([key, value], index) => {
        // Skip null or undefined values
        if (value == null) return null;

        // Handle arrays
        if (Array.isArray(value)) {
          return (
            <View key={`line-${index}`} style={{ marginBottom: 4 }}>
              <Text style={{ fontSize: 9 }}>
                {key}: {value.join(", ")}
              </Text>
            </View>
          );
        }

        // Handle nested objects
        if (typeof value === "object") {
          return (
            <View key={`section-${index}`}>{formatEditorContent(value)}</View>
          );
        }

        // Check if value is an email
        const isEmail =
          typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        // Style for different types of content
        const style: PDFTextStyle = {
          fontSize: 9,
          marginBottom: 4,
        };

        // For email addresses
        if (isEmail) {
          return (
            <View key={`line-${index}`} style={{ marginBottom: 4 }}>
              <Link
                src={`mailto:${value}`}
                style={{
                  ...style,
                  color: "#000",
                  textDecoration: "underline",
                }}>
                {value}
              </Link>
            </View>
          );
        }

        // For phone numbers (basic check)
        const isPhone =
          typeof value === "string" &&
          /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/.test(value);

        if (isPhone) {
          return (
            <View key={`line-${index}`}>
              <Text style={style}>{value}</Text>
            </View>
          );
        }

        // Default text rendering
        return (
          <View key={`line-${index}`}>
            <Text style={style}>
              {typeof value === "string" ? value : String(value)}
            </Text>
          </View>
        );
      })}
    </>
  );
}
