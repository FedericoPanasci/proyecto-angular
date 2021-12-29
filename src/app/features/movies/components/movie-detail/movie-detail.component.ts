import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/features/movies/service/movie.service';
import { MovieAPI, MoviesAPI } from 'src/app/models/movieApi.model';
import { CartService } from 'src/app/services/cart.service';

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
  ) {

   }

  ngOnInit(): void {
    this.moviesService.getDetailApi(this.activatedRoute.snapshot.params['id']).subscribe(response => {
      this.movieApi = response;
    })
  }

  add(movie1: MovieAPI){
    this.cartService.add(movie1);
  };

  ngOnDestroy(): void {
  this.subcription?.unsubscribe() }


}
