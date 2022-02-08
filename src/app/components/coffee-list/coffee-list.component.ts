import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Coffee } from 'src/app/models/coffee';
import { LoadCoffee, SetSelectedCoffee } from 'src/app/store/app.actions';
import { CoffeesListSelector, LoadingSelector } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.sass']
})
export class CoffeeListComponent implements OnInit, OnDestroy {
  //coffees = 
  coffees: Coffee[] = []
  loading = this.store.select(LoadingSelector)
  coffeesUnderPagiantion: Coffee[] = []

  subscription: Subscription = new Subscription();
  constructor(private store: Store, private router: Router) { }


  ngOnInit(): void {
    this.store.dispatch(new LoadCoffee(50))
    this.subscription.add(
      this.store.select(CoffeesListSelector).subscribe((data: any) => {
        this.coffees = data
        this.paginate({ first: 0, rows: 10 })
      }
      )
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showDetails(coffee: Coffee) {
    this.store.dispatch(new SetSelectedCoffee(coffee))
    this.router.navigate(['/details/' + coffee.id])
  }

  selectedIndex?= -1
  setRowToHighlight(_index: number) {
    this.selectedIndex = _index;
  }

  paginate(event: any) {
    this.coffeesUnderPagiantion = this.coffees.slice(event.first, event.first + event.rows)
  }
}
