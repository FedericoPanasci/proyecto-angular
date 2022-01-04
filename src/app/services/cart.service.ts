import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieAPI } from '../models/movieApi.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private list: MovieAPI[] = [];

  constructor() {}

  add(movie: MovieAPI) {
    if (!this.list.find((element) => element.id === movie.id)) {
      this.list.push(movie);
    } else {
      alert('ya se agrego antes');
    }
  }

  remove(name: MovieAPI): MovieAPI[] {
    let index = this.list.indexOf(name);
    return this.list.splice(index, 1);
  }

  clear(): MovieAPI[] {
    return (this.list = []);
  }

  getMovies() {
    return this.list;
  }

  getList(): Observable<MovieAPI[]> {
    return of(this.list);
  }
}
