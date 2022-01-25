import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { cartAddMovie, cartSetContent } from 'src/app/features/cart/store/cart-actions';
import { MovieAPI, MoviesAPI } from 'src/app/models/movieApi.model';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public urlImage = environment.imageApi;

  constructor(
    private movieService: MovieService,
    public cartService: CartService,
    private router: Router,
    private store: Store
  ) { }

  moviesAPI: MovieAPI[] = [];

  ngOnInit(): void {
    this.movieService.getListMock().subscribe(response => {
      this.moviesAPI = response;
    });
  }

   navigateToDetail(id: string){
     this.router.navigate(['peliculas', id]);
   }

   add(movie: MovieAPI){
    this.store.dispatch(cartAddMovie({movie: movie}))
    this.store.dispatch(cartSetContent({movies: this.moviesAPI}))

    // this.cartService.addCartApi(movie).subscribe(response =>
    // console.log(response));
    Swal.fire({
      icon: 'success',
      title: 'This movie was added',
      showConfirmButton: false,
      timer: 1500
    })
   }
}
