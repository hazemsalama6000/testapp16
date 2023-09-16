import { createFeatureSelector, createSelector } from "@ngrx/store";
import { operation } from "./actions/action";
import { CustomAction } from "./store";

const initialCounter = {
    i: 0
}

export function counterReducer(state = initialCounter, action: CustomAction) {

    switch (action.type) {
        case operation.Increment:
            return {
                i: state.i + action.payload
            };
            break;
        case operation.decrement:
            return {
                i: state.i - action.payload
            };
            break;

        default:
            return {
                i: state.i
            };
    }
}

let countFS = createFeatureSelector<{ i: number }>('count');
export let nSelector = createSelector(countFS, state => state.i);

















