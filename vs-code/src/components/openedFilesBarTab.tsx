import { useDispatch, useSelector } from "react-redux";
import { setClickedFile } from "../App/features/fileTreeSlicer";
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
  } = useSelector((state: RootState) => state.fileTree);
  const onClickHandler = () => {
    dispatch(
      setClickedFile({ filename: file.name, fileContent: file.content , activeTabId: file.id }),
    
    );
  };
  return (
    <div
      className={`flex p-2 hover:bg-gray-800 ${
        file.id === activeTabId
          ? "border-t-[2px] border-t-[#cf6ccf]"
          : "border-t-[2px] border-t-transparent"
      }`}
      onClick={onClickHandler}>
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};
export default OpenedFilesBarTab;
