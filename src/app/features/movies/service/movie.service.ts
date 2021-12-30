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

  getListApi():Observable<MoviesAPI>{
    console.log("getlistapi de movie service");
    console.log(this.url)
    return this.httpClient.get<MoviesAPI>(this.url);
  }

  getDetailApi(id: string):Observable<MovieAPI>{
    return this.httpClient.get<MovieAPI>(`${this.parte1}${id}${this.parte2}`);
  }

}

