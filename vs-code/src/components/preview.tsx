import { useSelector } from "react-redux";
import { RootState } from "../App/Store";
import FileSyntaxHighLighter from "./FileSyntaxHighLighter";
import OpenedFilesBar from "./openedFilesBar";

const Preview = () => {
  const { clickedFiles } = useSelector(
    (state: RootState) => state.fileTree
  );
    
    return (
      <>
        <OpenedFilesBar />
        {clickedFiles.fileContent && (
          <FileSyntaxHighLighter content={String(clickedFiles.fileContent)} />
        )}
      </>
    );
}
export default Preview