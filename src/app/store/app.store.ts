import { Coffee } from "../models/coffee";



export interface CoffeeState {
    coffeeList: Coffee[];
    selectedCoffee: Coffee;
    loading: Boolean
}

export const initialState = {
    coffeeList: [],
    selectedCoffee: null,
    loading: false
};


