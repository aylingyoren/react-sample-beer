import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { favoriteReducer } from "./favoriteReducer";

export const store = createStore(favoriteReducer, applyMiddleware(thunk));