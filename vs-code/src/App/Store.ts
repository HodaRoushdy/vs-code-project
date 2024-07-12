import { configureStore } from "@reduxjs/toolkit";
import fileTreeSlicer from "./features/fileTreeSlicer";
// ...

export const store = configureStore({
  reducer: {
    fileTree: fileTreeSlicer ,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
