import { Action } from "@ngrx/store";
import { CoffeeActions } from "./app.actions";
import { initialState } from "./app.store";

export interface CustomAction {
    type: string;
    payload: any;
}


export function CoffeeReducer(
    state = initialState,
    action: Action
) {
    switch (action.type) {
        case CoffeeActions.LOAD_COFFEE:
            return {
                ...state,
                loading: true,
            };
        case CoffeeActions.LOAD_COFFEE_SUCCESS:
            return {
                ...state,
                loading: false,
                coffeeList: (action as CustomAction).payload
            };
        case CoffeeActions.LOAD_COFFEE_FAILED:
            return {
                ...state,
                loading: false,
            };
        case CoffeeActions.SET_SELECTED_COFFEE:
            return {
                ...state,
                loading: false,
                selectedCoffee: (action as CustomAction).payload
            };
        default:
            return { ...state };
    }
}