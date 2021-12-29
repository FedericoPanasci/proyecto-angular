import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieAPI, MoviesAPI } from '../models/movieApi.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private list: MovieAPI[] = [];

  constructor() {}

  add(movie: MovieAPI){
  this.list.push(movie);
  }

  remove(name: MovieAPI){
  let index = this.list.indexOf(name);
  return this.list.splice(index, 1);
  }

  clear(){
    return this.list = [];
  }

  getMovies(){
    return this.list;
  }

  getList(): Observable<MovieAPI[]>{
    return of(this.list);
  }
}
