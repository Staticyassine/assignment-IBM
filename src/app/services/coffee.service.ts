import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const coffeeEndPoint = "https://random-data-api.com/api/coffee/random_coffee"
@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) { }

  // get coffee from end point 
  getCoffee(limit: number = 50) {
    return this.http.get(
      coffeeEndPoint + '?size=' + limit,
      {}
    );
  }
}
