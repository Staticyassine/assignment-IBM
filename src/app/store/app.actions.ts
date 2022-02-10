import { createAction, props } from "@ngrx/store";
import { Coffee } from "../models/coffee";

export enum CoffeeActions {
    LOAD_COFFEE = '[coffee-list] load coffee',
    LOAD_COFFEE_SUCCESS = '[coffee-list] load coffee success',
    LOAD_COFFEE_FAILED = '[coffee-list] load coffee failed',
    SET_SELECTED_COFFEE = '[coffee-list] set selected coffee',
    CLOSE_DETAIL = '[coffee-detail] close coffee detail',
}

export const LoadCoffee = createAction(
    CoffeeActions.LOAD_COFFEE,
    (payload: number) => ({ payload }),
);

export const LoadCoffeeSuccess = createAction(
    CoffeeActions.LOAD_COFFEE_SUCCESS,
    (payload: any) => ({ payload }),
);

export const LoadCoffeeFailed = createAction(
    CoffeeActions.LOAD_COFFEE_FAILED,
    (payload: any) => ({ payload }),
);

export const SetSelectedCoffee = createAction(
    CoffeeActions.SET_SELECTED_COFFEE,
    (payload: Coffee) => ({ payload }),
);

export const closeDetail = createAction(
    CoffeeActions.CLOSE_DETAIL,
);

