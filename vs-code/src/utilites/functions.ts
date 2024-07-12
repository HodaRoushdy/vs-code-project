import { IFile } from "../interfaces";

export const checkFileExists = (arrOfFiles: IFile[], id: string) => {
  return arrOfFiles.some((obj) => obj.id === id);
};
