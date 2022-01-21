import { combineReducers, configureStore } from "@reduxjs/toolkit";
import beersReducer from "./BeerSlice";
import favoriteReducer from "./FavoritesSlice";

const rootReducer = combineReducers({
    beersReducer,
    favoriteReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];