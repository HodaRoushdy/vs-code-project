// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../App/Store";
// import { setOpenedFiles } from "../App/features/fileTreeSlicer";
// import { checkFileExists } from "../utilites/functions";
// import BottomArrowIcon from "./SVG/Bottom";
// import RightArrowIcon from "./SVG/Right";
// import FileComponent from "./fileComponent";
// import RenderFileIcon from "./renderFileIcon";
// import { IFile } from "../interfaces";

// interface IProps {
//   fileTree: IFile;
// }

// const RecursiveComponent = ({fileTree}:IProps) => {
//      const [isOpen, setIsOpen] = useState<boolean>(false);
//      const toggle = () => setIsOpen((prev) => !prev);
//      const { openedFiles } = useSelector((state: RootState) => state.fileTree);
//      const dispatch = useDispatch();
//      const addToOpenedFiles = () => {
//        const exists = checkFileExists(openedFiles, fileTree.id);
//        if (exists) return;
//        dispatch(setOpenedFiles([...openedFiles, fileTree]));
//      };
//     return (
//       <div style={{ cursor: "pointer" }}>
//         <div style={{ display: "flex", marginBottom: "0.5rem" }}>
//           <span style={{ marginRight: "0.5rem" }}>
//             {fileTree.isFolder ? (
//               <div onClick={toggle}>
//                 {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
//                 <RenderFileIcon
//                   isOpen={isOpen}
//                   isFolder={fileTree.isFolder}
//                   filename={fileTree.name}
//                 />
//               </div>
//             ) : (
//               <>
//                 <RenderFileIcon filename={fileTree.name} />
//               </>
//             )}
//           </span>
//           <span onClick={addToOpenedFiles}>{fileTree.name}</span>
//         </div>
//         {isOpen &&
//           fileTree.children &&
//           fileTree.children.map((file) => (
//             <div style={{ display: "flex", marginLeft: "0.5rem" }}>
//               <FileComponent fileTree={file} />
//             </div>
//           ))}
//       </div>
//     );
// }
// export default RecursiveComponent

import { useState } from "react";
import { IFile } from "../interfaces";
import RenderFileIcon from "../components/renderFileIcon";
import BottomArrowIcon from "./SVG/Bottom";
import RightArrowIcon from "./SVG/Right";
import { useDispatch, useSelector } from "react-redux";
import {
  //   setClickedFileAction,
  //   setOpenedFilesAction,
  setOpenedFiles,
} from "../../src/App/features/fileTreeSlicer";
import { RootState } from "../../src/App/Store";
import { checkFileExists } from "../../src/utilites/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children } = fileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // ** Handlers
  const toggle = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    const exists = checkFileExists(openedFiles, id);
    // dispatch(
    //   setClickedFileAction({
    //     filename: name,
    //     fileContent: content,
    //     activeTabId: id,
    //   })
    // );
    if (exists) return;
    dispatch(setOpenedFiles([...openedFiles, fileTree]));
  };

  return (
    <div className="w-full mb-2 ml-1 cursor-pointer">
      <div className="flex items-center mb-1.5">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            <span className="mr-2">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            </span>

            <RenderFileIcon filename={name} isFolder isOpen={isOpen} />
            <span className="ml-2 text-2xl">{name}</span>
          </div>
        ) : (
          <div className="flex items-center ml-6" onClick={onFileClicked}>
            <RenderFileIcon filename={name} />
            <span className="ml-2 text-lg">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
