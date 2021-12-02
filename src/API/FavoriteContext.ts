import React, { createContext } from "react";
import { Beer } from "./interface";

type FavoriteContext = [
  Beer[],
  (item: Beer) => void,
  (id: number) => void,
];

export const FavoriteContext = createContext<FavoriteContext>([
  [],
  () => null,
  () => null,
]);
