import { Beer } from "../API/interface";

export interface FavoriteState {
  favorites: Beer[];
}

export enum FavoriteActionTypes {
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES",
}

interface FavoriteAddAction {
  type: FavoriteActionTypes.ADD_TO_FAVORITES;
  payload: Beer;
}

interface FavoriteRemoveAction {
  type: FavoriteActionTypes.REMOVE_FROM_FAVORITES;
  payload: Beer | number;
}

export type FavoriteAction = FavoriteAddAction | FavoriteRemoveAction;
