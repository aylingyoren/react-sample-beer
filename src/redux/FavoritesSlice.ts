import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../API/interface";

export interface FavoriteState {
  favorites: Beer[];
}

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Beer>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<Beer | number>) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;