import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todoSlice";

export const store = configureStore({
  reducer: {
    todos,
  },
});
