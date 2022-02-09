import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { CoffeeService } from '../services/coffee.service';
import { map, catchError, switchMap } from 'rxjs/operators';
import { CoffeeActions, LoadCoffeeFailed, LoadCoffeeSuccess } from './app.actions';

@Injectable()
export class CoffeeEffects {
    constructor(
        private action$: Actions,
        private coffeeService: CoffeeService
    ) { }

    loadCoffeeEffect$ = createEffect(() =>
        this.action$.pipe(
            ofType(CoffeeActions.LOAD_COFFEE),
            switchMap((actionData: any) =>
                this.coffeeService.getCoffee(actionData.payload).pipe(
                    map((data) => LoadCoffeeSuccess(data)),
                    catchError((err) => of(LoadCoffeeFailed(err)))
                )
            )
        )
    );


}