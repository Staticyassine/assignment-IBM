export enum CoffeeActions {
    LOAD_COFFEE = '[coffee-list] load coffee',
    LOAD_COFFEE_SUCCESS = '[coffee-list] load coffee success',
    LOAD_COFFEE_FAILED = '[coffee-list] load coffee failed',
    SET_SELECTED_COFFEE = '[coffee-list] set selected coffee',
}

export class LoadCoffee {
    type: string = CoffeeActions.LOAD_COFFEE;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}

export class LoadCoffeeSuccess {
    type: string = CoffeeActions.LOAD_COFFEE_SUCCESS;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}

export class LoadCoffeeFailed {
    type: string = CoffeeActions.LOAD_COFFEE_FAILED;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}

export class SetSelectedCoffee {
    type: string = CoffeeActions.SET_SELECTED_COFFEE;
    payload: any;
    constructor(payload: any) {
        this.payload = payload;
    }
}

