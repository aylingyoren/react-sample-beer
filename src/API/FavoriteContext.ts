import { createContext } from "react";
import { Beer } from "./interface";

type FavoriteContext = [
  Beer[],
  (item: Beer) => void,
  (item: Beer, id: number) => void,
  (items: Beer[]) => void
];

export const FavoriteContext = createContext<FavoriteContext>([
  [],
  () => null,
  () => null,
  () => null,
]);
