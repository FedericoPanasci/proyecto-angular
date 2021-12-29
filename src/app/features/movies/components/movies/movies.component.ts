import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieAPI, MoviesAPI } from 'src/app/models/movieApi.model';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  respuesta: MovieAPI[] = [];
  private urlImage = environment.imageApi;
  urlPath: string = 'https://image.tmdb.org/t/p/w500';
  constructor(
    private movieService: MovieService,
    public cartService: CartService,
    private router: Router,

    ) { }

  //movies: Movie[] = [];
  moviesCart: MovieAPI[] = [];
  moviesAPI: MovieAPI[] = [];

  ngOnInit(): void {
    //this.movieService.getList().subscribe(movies => this.movies = movies);
    this.movieService.getListApi().subscribe(response => {
      this.respuesta = response.results;
      console.log('ngoninit movies-component');
      this.moviesAPI = this.respuesta;
      console.log(this.moviesAPI);

      this.moviesAPI.forEach(movie => {
        movie.poster_path = this.urlImage+movie.poster_path;
        let aux: string;
        aux = this.urlImage+movie.poster_path;
        movie.poster_path = aux;
      });
      this.moviesCart = this.moviesAPI;
      this.cartService.getList().subscribe(movie => this.moviesCart = movie);
    })}

    //-----------------funciones con api
    //getDetailApi(){
      //this.movieService.getDetailApi(id)}

    //getMovieApi(){getMovieApi(title)}
    //-----------------funciones con mock

   navigateToDetail(id: string){
     this.router.navigate(['peliculas', id]);
   }

   add(movie: MovieAPI){
     this.cartService.add(movie);
   }

}
