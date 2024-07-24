import { v4 as uuidv4 } from "uuid";
import { IFile } from "../interfaces";

export const FileTree: IFile = {
  id: uuidv4(),
  name: "vs code project",
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: ".vite",
          isFolder: true,
          children: [{ id: uuidv4(), name: "react.js", isFolder: false }],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "index.html",
      isFolder: false,
      content: `export interface IFile{
    id:string,
    name: string,
    isFolder: boolean,
    children ?: IFile[],
    content ?: string | undefined
 }`,
    },
    {
      id: uuidv4(),
      name: "src",
      isFolder: true,
      children: [
        { id: uuidv4(), name: "App.tsx", isFolder: false },
        { id: uuidv4(), name: "App.css", isFolder: false },
      ],
    },
    {
      id: uuidv4(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "components",
          isFolder: true,
          children: [{ id: uuidv4(), name: "Button.tsx", isFolder: false }],
        },
      ],
    },
  ],
};
