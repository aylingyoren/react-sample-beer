import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Beer } from "../API/interface";

export interface FavoritesState {
  favorite: Beer[];
}

const initialState: FavoritesState = {
  favorite: [],
};

// const counterSlice: Slice<CounterState, {
//    increment: (state: WritableDraft<CounterState>) => void;
//    decrement: (state: WritableDraft<CounterState>) => void;
//    incrementByAmount: (state: WritableDraft<...>, action: PayloadAction<number>) => void;
// }, "counter">

export const favoritesSlice: Slice<FavoritesState> = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    //  addToFavorite(state, action) {
    //    action.payload.isFav = true;
    //    state.favorite.push(action.payload);
    //    localStorage.setItem("favorites", JSON.stringify(state.favorite));
    //    console.log(state.favorite);
    //  },
    //  removeFromFavorite(state, action) {
    //    action.payload.isFav = false;
    //    const newFavs = state.favorite.filter(
    //      (item: Beer) => item.id !== action.payload.id
    //    );
    //    localStorage.setItem("favorites", JSON.stringify(newFavs));
    //  },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
