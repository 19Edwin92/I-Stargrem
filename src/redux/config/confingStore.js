import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/postsSlice";

export const store = configureStore({
  reducer: {
    todos,
  },
});
