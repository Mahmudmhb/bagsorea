import { TBags } from "@/components/Types/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

type TBagsState = {
  bags: TBags[];
  singleBag: TBags[];
};

const initialState: TBagsState = {
  bags: [],
  singleBag: [],
};

export const BagsSlice = createSlice({
  name: "bags",
  initialState,
  reducers: {
    getAllBags: (state, action: PayloadAction<TBags[]>) => {
      state.bags = action.payload;
    },
    getSingleBag: (state, action: PayloadAction<TBags[]>) => {
      state.singleBag = action.payload;
    },
  },
});

export const { getAllBags, getSingleBag } = BagsSlice.actions;
export const useGetBags = (state: RootState) => state.bags.bags;
export const useGetSingleBag = (state: RootState) => state.bags.singleBag;
export default BagsSlice.reducer;
