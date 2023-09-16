import { Action, ActionReducerMap } from "@ngrx/store";
import { counterReducer } from "./count.reducer";

export interface IStoreInterface {
    count: { i: number }
}

export interface CustomAction {
    type: string,
    payload?: any
}


export const reducers:ActionReducerMap<IStoreInterface> = {count:counterReducer};