import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/board/boardSlice";

export default configureStore({
  reducer: {
    boardReducer,
  },
});
