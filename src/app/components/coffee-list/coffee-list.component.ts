import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Coffee } from 'src/app/models/coffee';
import { LoadCoffee, SetSelectedCoffee } from 'src/app/store/app.actions';
import { coffeesListSelector, getSelectedCoffeeSelector, loadingSelector } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoffeeListComponent implements OnInit, OnDestroy {
  coffees: Coffee[] = []
  pinedCoffees: Coffee[] = []
  searchedCoffees: Coffee[] = []
  selectedIndex?= -1
  searchText = '';
  loading$ = this.store.select(loadingSelector)
  selectedCoffee$ = this.store.select(getSelectedCoffeeSelector)
  coffeesUnderPagiantion: Coffee[] = []
  subscription: Subscription = new Subscription();

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(LoadCoffee(50))
    this.subscription.add(
      this.store.select(coffeesListSelector).subscribe((data: any) => {
        this.coffees = data
        this.searchedCoffees = this.coffees
        this.paginate({ first: 0, rows: 10 })
      }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showDetails(coffee: Coffee) {
    this.store.dispatch(SetSelectedCoffee(coffee))
    this.router.navigate(['/details/' + coffee.id])
  }

  pinCard(coffee: Coffee) {
    if (coffee.pined) this.pinedCoffees.push(coffee)
    else {
      let index = this.pinedCoffees.findIndex((c: Coffee) => c.id == coffee.id)
      if (index != -1) this.pinedCoffees.splice(index, 1)
      let indexC = this.coffeesUnderPagiantion.findIndex((c: Coffee) => c.id == coffee.id)
      if (indexC != -1) this.coffeesUnderPagiantion[indexC] = { ...this.coffeesUnderPagiantion[indexC], pined: false }
    }
  }

  setRowToHighlight(_index: number) {
    this.selectedIndex = _index;
  }

  paginate(event: any) {
    this.coffeesUnderPagiantion = this.searchedCoffees.slice(event.first, event.first + event.rows)
  }
  onSearch() {
    this.searchedCoffees = this.coffees.filter(co => {
      return co.blend_name?.toLocaleLowerCase().includes(this.searchText);
    });
    this.paginate({ first: 0, rows: 10 })
  }
}
