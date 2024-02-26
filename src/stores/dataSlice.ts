import { createSlice } from "@reduxjs/toolkit";
import { DataType } from "../types/TableAreaTypes";
import { data } from "../components/Data/TableDummy";

interface DataState {
  data: DataType[];
}

const initialState: DataState = {
  data: data,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    editItem: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.data.findIndex((item) => item.key === id);
      console.log("cn.kzcxkjl");
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updates };
      }
    },
  },
});

export const { setData, editItem } = dataSlice.actions;

export default dataSlice.reducer;
