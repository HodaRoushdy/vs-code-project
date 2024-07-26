import { useSelector } from "react-redux";
import { RootState } from "../App/Store";
import { IFile } from "../interfaces";
import OpenedFilesBarTab from "./openedFilesBarTab";
import { useState } from "react";
import ContextMenu from "./ui/contextMenu";

const OpenedFilesBar = () => {
  const { openedFiles } = useSelector(
    (state: RootState) => state.fileTree
  );
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-fit">
      <div
        className="flex items-center border-b-[1px] border-[#ffffff1f]"
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
          
        }}>
        {openedFiles.map((file: IFile) => (
          <OpenedFilesBarTab file={file} key={file.id} />
        ))}
      </div>
      {showMenu && <ContextMenu setShowMenu={setShowMenu} positions={menuPosition}/>}

    </div>
  );
};
export default OpenedFilesBar;
