import { Beer } from "../API/interface";

export interface FavoriteState {
    favorites: any[]
};

export enum FavoriteActionTypes {
    ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
    REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"
};

interface FavoriteAddAction {
    type: FavoriteActionTypes.ADD_TO_FAVORITES;
    payload: any;
};

interface FavoriteRemoveAction {
    type: FavoriteActionTypes.REMOVE_FROM_FAVORITES;
    payload: any;
};

export type FavoriteAction = FavoriteAddAction | FavoriteRemoveAction;