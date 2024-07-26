import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFiles } from "../../App/features/fileTreeSlicer";
import { RootState } from "../../App/Store";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
}
const ContextMenu = ({ positions: { x, y }, setShowMenu }: IProps) => {
  const dispatch = useDispatch();
  const { openedFiles, tabIdToRemove } = useSelector(
    (state: RootState) => state.fileTree
  );
  const menuRef = useRef<HTMLDivElement>(null);
  const handleCloseAll = () => {
    dispatch(setOpenedFiles([]));
    setShowMenu(false);
  };
  const handleCloseTab = () => {
    const filtered = openedFiles.filter((file) => file.id !== tabIdToRemove);
    dispatch(setOpenedFiles(filtered));
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutsideMenu = (event: MouseEvent) => {
      if (menuRef && !menuRef.current?.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutsideMenu);
    return () => {
      window.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [setShowMenu]);
  return (
    <div ref={menuRef}>
      <ul
        className="bg-white text-black px-4 py-2 rounded-md"
        style={{ position: "absolute", left: x, top: y }}>
        <li
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 rounded-sm duration-300 cursor-pointer"
          role="menuitem"
          onClick={handleCloseTab}>
          close
        </li>
        <li
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 rounded-sm duration-300 cursor-pointer"
          role="menuitem"
          onClick={handleCloseAll}>
          close all
        </li>
      </ul>
    </div>
  );
};
export default ContextMenu;
