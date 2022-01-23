import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Beer } from "../API/interface";

export const fetchBeers = createAsyncThunk(
  "beers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Beer[]>(
        "https://api.punkapi.com/v2/beers?page=2&per_page=80"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error occured while fetching beers.");
    }
  }
);
