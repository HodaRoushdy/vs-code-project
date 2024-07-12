import { useSelector } from "react-redux";
import { RootState } from "../App/Store";
import { IFile } from "../interfaces";
import OpenedFilesBarTab from "./openedFilesBarTab";

const OpenedFilesBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  return (
    <div className="flex items-center h-fit">
      {openedFiles.map((file: IFile) => (
        <div >
          <OpenedFilesBarTab file={file} key={file.id} />
          <div >{file.content}</div>
        </div>
      ))}
    </div>
  );
};
export default OpenedFilesBar;
