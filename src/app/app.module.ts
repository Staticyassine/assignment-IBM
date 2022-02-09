import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { StoreModule } from '@ngrx/store';
import { CoffeeReducer } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './store/app.effect';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CoffeeDetailsComponent,
    DetailCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ coffees: CoffeeReducer }),
    EffectsModule.forRoot([CoffeeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
    PaginatorModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
