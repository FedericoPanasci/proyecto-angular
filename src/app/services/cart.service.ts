import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Movie } from '../models/movie.model';
import { cartMock } from './cart.mock';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = [];
  constructor() {}

  add(movie: Movie){
    this.cart.push(movie);
  }

  remove(name: Movie){
    let index = this.cart.indexOf(name);
    return this.cart.splice(index, 1);
  }

  clear(){
    return this.cart = [];
  }

  getMovies(){
    return this.cart;
  }

  getList(): Observable<Cart[]>{
    return of(cartMock);
  }
}
