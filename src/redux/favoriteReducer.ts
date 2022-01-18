import { FavoriteAction, FavoriteActionTypes, FavoriteState } from "./favoriteTypes";

const initialState: FavoriteState = {
    favorites: [],
};

export const favoriteReducer = (state = initialState, action: FavoriteAction) => {
    switch(action.type) {
        case FavoriteActionTypes.ADD_TO_FAVORITES:
            return {...state, favorites: [...state.favorites, action.payload]};
        case FavoriteActionTypes.REMOVE_FROM_FAVORITES:
            return {...state, favorites: state.favorites.filter(favorite => favorite.id !== action.payload.id)};
        default:
            return state;
    }
};

export type RootState = ReturnType<typeof favoriteReducer>;

