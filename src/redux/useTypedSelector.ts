import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "./favoriteReducer";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector