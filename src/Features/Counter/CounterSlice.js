import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  count: 0,
};

const CreteSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    }
});
