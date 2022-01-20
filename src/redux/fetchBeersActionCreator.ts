import { Dispatch } from "redux";
import axios from "axios";
import { BeerAction, BeerActionTypes } from "./types/beerTypes";

export const fetchBeers = (url: string) => {
    return async (dispatch: Dispatch<BeerAction>) => {
        try {
            dispatch({type: BeerActionTypes.FETCH_BEERS})
            const response = await axios.get(url)
            setTimeout(() => {
                dispatch({type: BeerActionTypes.FETCH_BEERS_SUCCESS, payload: response.data});
            }, 500);
        } catch (e) {
            dispatch({
                type: BeerActionTypes.FETCH_BEERS_ERROR,
                payload: 'Error while fetching beers'
            })
        }
    }
}