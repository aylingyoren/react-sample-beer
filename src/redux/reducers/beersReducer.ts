import { BeerState, BeerAction, BeerActionTypes } from "../types/beerTypes"

const initialState: BeerState = {
    beers: [],
    loading: false,
    error: null
};

export const beersReducer = (state = initialState, action: BeerAction) => {
    switch (action.type) {
        case BeerActionTypes.FETCH_BEERS:
            return { loading: true, error: null, beers: [] };
        case BeerActionTypes.FETCH_BEERS_SUCCESS:
            return { loading: false, error: null, beers: action.payload };
        case BeerActionTypes.FETCH_BEERS_ERROR:
            return { loading: false, error: action.payload, beers: [] };
        default:
            return state;
    }
};