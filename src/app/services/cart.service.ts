import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieAPI } from '../models/movieApi.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private list: MovieAPI[] = [];
  url = environment.cartRestApi;

  constructor(private httpClient: HttpClient /*agregado para la apiCart*/) {}

  //--------------agregado para la apiCart

  getListCartApi(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  //a chequear...
  addCartApi(movie: MovieAPI): Observable<any> {
    console.log(movie);
    if (!this.list.find((element) => element.id === movie.id)) {
      this.list.push(movie);
    } else {
      alert('ya se agrego antes');
    }
    return this.httpClient.post<MovieAPI>(this.url, movie);
  }
  removeCartApi(movie: MovieAPI): Observable<any> {
    let index = this.list.indexOf(movie);
    console.log(this.list);
    console.log('index ' + index);
    console.log(movie);
    console.log(movie.id);
    let id: string = movie.id;
    this.list.splice(index, 1);
    return this.httpClient.delete(`${this.url}?id=${id}`);
  }

  //--------------agregado para la apiCart
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
