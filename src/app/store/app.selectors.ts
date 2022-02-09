import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoffeeState } from "./app.store";


const coffeeSelector = createFeatureSelector<CoffeeState>('coffees');
export const coffeesListSelector = createSelector(
    coffeeSelector,
    (state) => state.coffeeList
);
export const getSelectedCoffeeSelector = createSelector(
    coffeeSelector,
    (state) => state.selectedCoffee
);
export const loadingSelector = createSelector(
    coffeeSelector,
    (state) => state.loading
);
