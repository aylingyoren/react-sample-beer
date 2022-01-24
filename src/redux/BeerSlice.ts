import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../API/interface";
import { fetchBeers } from "./fetchBeersActionCreator";

export interface BeerState {
  beers: Beer[];
  loading: boolean;
  error: null | string;
}

const initialState: BeerState = {
  beers: [],
  loading: false,
  error: null,
};

export const beerSlice = createSlice({
  name: "beers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBeers.fulfilled.type]: (state, action: PayloadAction<Beer[]>) => {
      state.loading = false;
      state.beers = action.payload;
      state.error = null;
    },
    [fetchBeers.pending.type]: (state) => {
      state.loading = true;
      state.beers = [];
      state.error = null;
    },
    [fetchBeers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.beers = [];
      state.error = action.payload;
    },
  },
});

export default beerSlice.reducer;
