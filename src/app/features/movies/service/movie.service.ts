import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { MovieAPI, MoviesAPI } from 'src/app/models/movieApi.model';

@Injectable()

export class MovieService {

  movies: Movie[] = [];
  moviesAPI: MovieAPI[] = [];
  private url = environment.movieApi;
  private parte1 = environment.firstPart;
  private parte2 = environment.lastPart;
  constructor(private httpClient: HttpClient) {}

  //------------funciones con base de datos
  getListApi():Observable<MoviesAPI>{
    console.log("getlistapi de movie service");
    console.log(this.url)
    return this.httpClient.get<MoviesAPI>(this.url);
  }

  // getDetailApi(id: string):Observable<MovieAPI>{
  //   return this.httpClient.get<MovieAPI>(`${this.url}${id}`)
  // }

  getDetailApi(id: string):Observable<MovieAPI>{
    return this.httpClient.get<MovieAPI>(`${this.parte1}${id}${this.parte2}`);
  }

  // getMovieApi(movie1: string):Observable<MovieAPI>{
  //   return this.httpClient.get<MovieAPI>(`${this.url}${movie1}`)
  // }
  //----------------funciones con mock
  /*
  getMovie(movie1: string): Observable<Movie | undefined>{
    return of (this.movies.find(movie => {movie.title === movie1}));
  }

  getDetail(id: string): Observable<Movie | undefined>{
    return of (moviesMock.find(movie => movie.id === id));
  }

  getList(): Observable<Movie[]>{
    return of(moviesMock);
  }*/
}

