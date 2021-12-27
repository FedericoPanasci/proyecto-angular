import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { Movie } from 'src/app/models/movie.model';
import { CartService } from 'src/app/services/cart.service';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    public cartService: CartService,
    private router: Router
    ) { }

  movies: Movie[] = [];
  moviesCart: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getList().subscribe(movies => this.movies = movies);
    this.cartService.getList().subscribe(movies => this.moviesCart = movies);

  }

  navigateToDetail(id: string){
    this.router.navigate(['peliculas', id]);
  }

  add(movie: Movie){
    this.cartService.add(movie);
  }
}


