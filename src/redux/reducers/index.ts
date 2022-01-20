import { combineReducers } from "redux";
import { favoriteReducer } from "./favoriteReducer";
import { beersReducer } from "./beersReducer";

export const rootReducer = combineReducers({
    favorites: favoriteReducer,
    beers: beersReducer
});

export type RootState = ReturnType<typeof rootReducer>;