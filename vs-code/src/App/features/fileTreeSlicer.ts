import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

export interface IInitialState {
  openedFiles: IFile[];
  clickedFiles: IClickedFiles;
}
interface IClickedFiles {
  filename: string;
  fileContent: string | undefined;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFiles: {
    filename: "",
    fileContent: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IClickedFiles>) => {
      state.clickedFiles.fileContent = action.payload.fileContent;
      state.clickedFiles.filename = action.payload.filename;
    },
  },
});

export const { setOpenedFiles, setClickedFile } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
