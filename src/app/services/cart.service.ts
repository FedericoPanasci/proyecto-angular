import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Movie } from '../models/movie.model';
import { cartMock } from './cart.mock';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private list: Movie[] = [];
  cart: Cart[] = [];
  constructor() {}

  add(movie: Movie){
  this.list.push(movie);
  }

  remove(name: Movie){
  let index = this.list.indexOf(name);
  return this.list.splice(index, 1);
  }

  clear(){
    return this.list = [];
  }

  getMovies(){
    return this.list;
  }

  getList(): Observable<Movie[]>{
    return of(this.list);
  }
}
