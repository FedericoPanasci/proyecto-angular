import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';
import { movieMock } from './movie.mock';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [];

  constructor() { }

  getMovie(movie1: string){
    return this.movies.find(movie => {movie.name === movie1});
  }

  getDetail(movie: Movie){
    let index = this.movies.indexOf(movie);
    return this.movies[index];
  }

  getList(): Observable<Movie[]>{
    return of(movieMock);
  }
}
