import { View } from "@react-pdf/renderer";
import { formatEditorContent } from "./formatted-editor-content";

export function EditorContent({ content }: { content?: JSON }) {
    // console.log(content, "Got you babe?")
  if (!content) {
    return null;
  }

  return (
    <View style={{ marginTop: 10, lineHeight: 0.9 }}>
      {formatEditorContent(content)}
    </View>
  );
}
