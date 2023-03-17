import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const todosSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {},
});

// export const {} = todosSlice.actions;
export default todosSlice.reducer;
