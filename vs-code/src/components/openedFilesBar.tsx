import { useSelector } from "react-redux";
import { RootState } from "../App/Store";
import { IFile } from "../interfaces";
import OpenedFilesBarTab from "./openedFilesBarTab";
// import FileSyntaxHighLighter from "./FileSyntaxHighLighter";

const OpenedFilesBar = () => {
  const { openedFiles,clickedFiles } = useSelector((state: RootState) => state.fileTree);
  return (
    <div className="w-fit">
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file: IFile) => (
          <OpenedFilesBarTab file={file} key={file.id} />
        ))}
      </div>
      {/* {clickedFiles.fileContent && (
        <FileSyntaxHighLighter content={String(clickedFiles.fileContent)} />)}  */}
    </div>
  );
};
export default OpenedFilesBar;
