import { useSelector } from "react-redux";
import { RootState } from "../App/Store";
import { FileTree } from "../data/fileTree";
import ImgIcon from "./ImgIcon";
import RecursiveComponent from "./RecursiveComponent";
import ResizablePanel from "./ResizablePanel";
// import OpenedFilesBar from "./openedFilesBar";
import Preview from "./preview";

const FileComponent = () => {
   const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  return (
    <div className="flex h-screen w-full overflow-x-auto">
      <ResizablePanel
        showLeftPanel={true}
        defaultLayout={[20, 80]}
        rightPanel={
          openedFiles.length ? <Preview /> : <div className="w-full h-screen flex items-center justify-center">
            <ImgIcon className="w-64 h-64" src="./icons/vscode.svg"/>
          </div>
        }
        leftPanel={
          <div className="p-2 ">
            <RecursiveComponent fileTree={FileTree} />
          </div>
        }
      />
    </div>
  );
};
export default FileComponent;
