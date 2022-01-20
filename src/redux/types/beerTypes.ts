import { Beer } from "../../API/interface";

export interface BeerState {
    beers: Beer[];
    loading: boolean;
    error: null | string;
}

export enum BeerActionTypes {
    FETCH_BEERS = 'FETCH_BEERS',
    FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS',
    FETCH_BEERS_ERROR = 'FETCH_BEERS_ERROR',
}

interface FetchBeersAction {
    type: BeerActionTypes.FETCH_BEERS;
}

interface FetchBeersSuccessAction {
    type: BeerActionTypes.FETCH_BEERS_SUCCESS;
    payload: Beer[]
}

interface FetchBeersErrorAction {
    type: BeerActionTypes.FETCH_BEERS_ERROR;
    payload: string;
}

export type BeerAction = FetchBeersAction | FetchBeersErrorAction | FetchBeersSuccessAction;