import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface IProps {
  content: string;
}
const FileSyntaxHighLighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      showLineNumbers
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100%",
        overflowX: "auto",
        fontSize: "1.5rem",
      }}>
          {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighLighter;
