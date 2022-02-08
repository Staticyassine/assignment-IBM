import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoffeeState } from "./app.store";


let coffeeSelector = createFeatureSelector<CoffeeState>('coffees');
export let CoffeesListSelector = createSelector(
    coffeeSelector,
    (state) => state.coffeeList
);
export let GetSelectedCoffeeSelector = createSelector(
    coffeeSelector,
    (state) => state.selectedCoffee
);
export let LoadingSelector = createSelector(
    coffeeSelector,
    (state) => state.loading
);
