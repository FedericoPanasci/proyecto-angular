import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';
import { moviesMock } from './movie.mock';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [];

  constructor() {}


  getMovie(movie1: string): Observable<Movie | undefined>{
    return of (this.movies.find(movie => {movie.title === movie1}));
  }

  getDetail(id: string): Observable<Movie | undefined>{
    return of (moviesMock.find(movie => movie.id === id));
  }

  getList(): Observable<Movie[]>{
    return of(moviesMock);
  }
}
