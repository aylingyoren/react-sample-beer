import { createContext } from "react";
import { Beer } from "./interface";

type FavoriteContext = [
  Beer[],
  (item: Beer) => void,
  (item: Beer) => void,
  (item: Beer) => void
];

export const FavoriteContext = createContext<FavoriteContext>([
  [],
  () => null,
  () => null,
  () => null,
]);
