import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Beer } from "../API/interface";

export const fetchBeers = createAsyncThunk(
  "beers/fetchAll",
  async (url: string, thunkAPI) => {
    try {
      const response = await axios.get<Beer[]>(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error occured while fetching beers.");
    }
  }
);
