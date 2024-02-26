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
    addData: (state, action) => {
      const { name, updates } = action.payload;
      const index = state.data.findIndex((item) => item.productName === name);
      if (index < 0) {
        state.data.push(updates);
      } else {
        console.log("error", index, updates);
      }
    },
    editItem: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.data.findIndex((item) => item.barcodeId === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updates };
      }
    },
  },
});

export const { setData, editItem, addData } = dataSlice.actions;

export default dataSlice.reducer;
