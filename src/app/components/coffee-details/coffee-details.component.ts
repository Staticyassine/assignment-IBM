import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Coffee } from 'src/app/models/coffee';
import { closeDetail } from 'src/app/store/app.actions';
import { getSelectedCoffeeSelector } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.sass'],
})
export class CoffeeDetailsComponent implements OnInit, OnDestroy {

  selectedCoffee: any
  subscription: Subscription = new Subscription();

  constructor(private store: Store, private router: Router, private ch: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(getSelectedCoffeeSelector).subscribe((data: any) => {
        this.selectedCoffee = data
        this.ch.detectChanges();
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.store.dispatch(closeDetail());
    this.router.navigate(['/'])
  }
}




