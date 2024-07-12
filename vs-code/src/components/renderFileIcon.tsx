import ImgIcon from "./ImgIcon";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const ExtensionIconsPaths: Record<string, string> = {
  tsx: "./icons/react_ts",
  js: "./icons/javascript",
  html: "./icons/html",
  css: "./icons/css",
  public: "./icons/folder-public",
  src: "./icons/folder-src",
  components: "./icons/folder-components",
  node_modules: "./icons/folder-node",
};

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
    const extension = filename.split(".").pop();

    if (extension && Object.prototype.hasOwnProperty.call(ExtensionIconsPaths, extension)) {
      const IconPaths = isFolder
        ? isOpen
          ? `${ExtensionIconsPaths[extension]}-open.svg`
          : `${ExtensionIconsPaths[extension]}.svg`
        : `${ExtensionIconsPaths[extension]}.svg`;

  

      return <ImgIcon src={IconPaths} />;
    }

  
    // if (extension === "public" && isFolder)
//     return isOpen ? (
//       <ImgIcon src="./icons/folder-public-open.svg" />
//     ) : (
//       <ImgIcon src="./icons/folder-public.svg" />
//     );
//   if (extension === "src" && isFolder)
//     return isOpen ? (
//       <ImgIcon src="./icons/folder-src-open.svg" />
//     ) : (
//       <ImgIcon src="./icons/folder-src.svg" />
//     );
//   if (extension === "node_modules" && isFolder)
//     return isOpen ? (
//       <ImgIcon src="./icons/folder-node-open.svg" />
//     ) : (
//       <ImgIcon src="./icons/folder-node.svg" />
//     );
//   if (extension === "components" && isFolder)
//     return isOpen ? (
//       <ImgIcon src="./icons/folder-components-open.svg" />
//     ) : (
//       <ImgIcon src="./icons/folder-components.svg" />
//     );


//   if (extension === "html") return <ImgIcon src="./icons/html.svg" />;
//   if (extension === "tsx") return <ImgIcon src="./icons/react_ts.svg" />;
//   if (extension === "css") return <ImgIcon src="./icons/css.svg" />;
//   if (extension === "js") return <ImgIcon src="./icons/javascript.svg" />;
      // };
}
export default RenderFileIcon;
