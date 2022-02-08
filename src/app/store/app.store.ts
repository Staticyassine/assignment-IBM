import { Coffee } from "../models/coffee";



export interface CoffeeState {
    coffeeList: Coffee[];
    selectedCoffee: Coffee;
    loading: Boolean
}

export let initialState = {
    coffeeList: [],
    selectedCoffee: null,
    loading: false
};


