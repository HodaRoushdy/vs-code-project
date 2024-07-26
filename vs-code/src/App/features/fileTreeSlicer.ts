import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFiles {
  activeTabId: string | null;
  filename: string;
  fileContent: string | undefined;
}
export interface IInitialState {
  openedFiles: IFile[];
  clickedFiles: IClickedFiles;
  tabIdToRemove : string | null
}


const initialState: IInitialState = {
  openedFiles: [],
  clickedFiles: {
  activeTabId: null,
    filename: "",
    fileContent: "",
  },
  tabIdToRemove :null
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IClickedFiles>) => {
      state.clickedFiles = action.payload;
    },
    setTabIdToRemove: (state, action: PayloadAction<string|null>) => {
      state.tabIdToRemove = action.payload;
    },
  },
});

export const { setOpenedFiles, setClickedFile, setTabIdToRemove } =
  fileTreeSlice.actions;
export default fileTreeSlice.reducer;
