import { FileTree } from "../data/fileTree";
import RecursiveComponent from "./RecursiveComponent";
import OpenedFilesBar from "./openedFilesBar";

const FileComponent = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 border-r border-white p-2 border-[#ffffff1f]">
        <RecursiveComponent fileTree={FileTree} />
      </div>
      <OpenedFilesBar />
    </div>
  );
};
export default FileComponent;
