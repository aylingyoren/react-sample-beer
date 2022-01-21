import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../API/interface";

export interface FavoriteState {
    favorites: Beer[];
}

const initialState: FavoriteState = {
    favorites: [],
};

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorite(state, action: PayloadAction<Beer>) {
            state.favorites.push(action.payload);
        },
        removeFromFavorite(state, action: PayloadAction<Beer | number>) {
            state.favorites.filter((favorite) => favorite.id !== action.payload);
        },
    }
});

export default favoriteSlice.reducer;

// const favoriteReducer = (
//     state = initialState,
//     action: FavoriteAction
//   ) => {
//     switch (action.type) {
//       case FavoriteActionTypes.ADD_TO_FAVORITES:
//         return { ...state, favorites: [...state.favorites, action.payload] };
//       case FavoriteActionTypes.REMOVE_FROM_FAVORITES:
//         return {
//           ...state,
//           favorites: state.favorites.filter(
//             (favorite) => favorite.id !== action.payload
//           ),
//         };
//       default:
//         return state;
//     }
//   };
  