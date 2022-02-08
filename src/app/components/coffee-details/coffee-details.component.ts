import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Coffee } from 'src/app/models/coffee';
import { GetSelectedCoffeeSelector } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.sass']
})
export class CoffeeDetailsComponent implements OnInit, OnDestroy {

  constructor(private store: Store, private router: Router) { }
  selectedCoffee: any
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(GetSelectedCoffeeSelector).subscribe((data: any) => {
        this.selectedCoffee = data
        console.log(this.selectedCoffee);
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.router.navigate(['/'])

  }

}




