import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private list: Movie[] = [];

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
