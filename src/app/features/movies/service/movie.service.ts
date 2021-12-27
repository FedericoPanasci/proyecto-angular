import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';
import { moviesMock } from './movie.mock';


export class MovieService {

  movies: Movie[] = [];
  private url = environment.UserRestApi;
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

