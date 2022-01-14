import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/features/movies/service/movie.service';
import { MovieAPI, MoviesAPI } from 'src/app/models/movieApi.model';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  private subcription: Subscription | undefined;
  movieApi: MovieAPI | any;
  urlPath: string = 'https://image.tmdb.org/t/p/w500';
  moviesCart: MovieAPI[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MovieService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.moviesService.getDetaliMock(this.activatedRoute.snapshot.params['id']).subscribe(response => {
      this.movieApi = response;
    })

    this.cartService.getListCartApi().subscribe(response => {
      this.movieApi = response
      console.log(response);
      console.log(this.movieApi);
    }
    )
  }

  add(movie1: MovieAPI){
    this.cartService.addCartApi(movie1).subscribe(response => {
      console.log(response)
    });
    Swal.fire({
      icon: 'success',
      title: 'This movie was added',
      showConfirmButton: false,
      timer: 1500
    })
  };

  ngOnDestroy(): void {
    this.subcription?.unsubscribe()
  }
}
