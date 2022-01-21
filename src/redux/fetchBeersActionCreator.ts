import axios from "axios";
import { AppDispatch } from "./store";
import { Beer } from "../API/interface";
import { beerSlice } from "./BeerSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchBeers = (url: string) => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(beerSlice.actions.beersFetching());
//         const response = await axios.get<Beer[]>(url);
//         dispatch(beerSlice.actions.beersFetchingSuccess(response.data));
//     } catch(e: any) {
//         dispatch(beerSlice.actions.beersFetchingError(e.message));
//     }
// }

export const fetchBeers = createAsyncThunk(
    "beers/fetchAll",
    async (_,  thunkAPI) => {
        const response = await axios.get<Beer[]>("https://api.punkapi.com/v2/beers?page=2&per_page=80");
        return response.data;
    }
)