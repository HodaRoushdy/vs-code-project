import { useDispatch, useSelector } from "react-redux";
import { setClickedFile, setOpenedFiles, setTabIdToRemove } from "../App/features/fileTreeSlicer";
import { IFile } from "../interfaces";
import CloseIcon from "./SVG/CloseIcon";
import RenderFileIcon from "./renderFileIcon";
import { RootState } from "../App/Store";

interface IProps {
  file: IFile;
}
const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
    clickedFiles: { activeTabId },
    openedFiles
  } = useSelector((state: RootState) => state.fileTree);
  const onClickHandler = () => {
    dispatch(
      setClickedFile({ filename: file.name, fileContent: file.content , activeTabId: file.id }),
    
    );
  };

  const removeTab = (id:string) => {
    const filtered = openedFiles.filter(ele => ele.id !== id);
    const lastId = filtered[filtered.length - 1];
    if (!lastId) {
      dispatch(setOpenedFiles([]));
      dispatch(setClickedFile({ activeTabId: null, filename: "", fileContent: "" }))
      return;
    }
    dispatch(setOpenedFiles(filtered));
    dispatch(setClickedFile({ activeTabId: lastId.id, fileContent: lastId.content, filename: lastId.name }))
  }

  return (
    <div
      className={`flex p-2 w-fit hover:bg-zinc-700 ${
        file.id === activeTabId
          ? "border-t-[2px] border-t-[#cf6ccf]"
          : "border-t-[2px] border-t-transparent"
      }`}
      onClick={onClickHandler}
      onContextMenu={e => {
        e.preventDefault();
        dispatch(setTabIdToRemove(file.id));
      }}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md hover:bg-zinc-600"
        onClick={e => { e.stopPropagation;  removeTab(file.id)}}>
        <CloseIcon />
      </span>
    </div>
  );
};
export default OpenedFilesBarTab;
