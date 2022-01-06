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
  //private url = environment.movieApi;
  //private parte1 = environment.firstPart;
  //private parte2 = environment.lastPart;
  private mock = environment.mockApi;

  constructor(private httpClient: HttpClient) {
    this.getListMock().subscribe(response => {
      this.moviesAPI = response;
    });
  }

  // getListApi():Observable<MoviesAPI>{
  //   return this.httpClient.get<MoviesAPI>(this.url);
  // }
  //-----------------
  getListMock():Observable<MovieAPI[]>{
    return this.httpClient.get<MovieAPI[]>(this.mock);
  }

  // getDetailApi(id: string):Observable<MovieAPI>{
  //   return this.httpClient.get<MovieAPI>(`${this.parte1}${id}${this.parte2}`);
  // }

  getDetaliMock(id: number):Observable<MovieAPI>{
    return this.httpClient.get<MovieAPI>(`${this.mock}/${id}`)
  }

  addMovie(movie: MovieAPI):Observable<MovieAPI | string>{
    if (!this.moviesAPI.find((element) => element.title === movie.title)) {
      return this.httpClient.post<MovieAPI>(this.mock, movie);
    } else {
      alert('ya existe esa pelicula');
      return of ("ya existe la pelicula");
    }
  }

  updateMovie(movie: MovieAPI):Observable<MovieAPI>{
    return this.httpClient.put<MovieAPI>(`${this.mock}/${movie.id}`, movie);
  }

  deleteMovie(id: string):Observable<MovieAPI>{
    return this.httpClient.delete<MovieAPI>(`${this.mock}/${id}`);
  }
}

