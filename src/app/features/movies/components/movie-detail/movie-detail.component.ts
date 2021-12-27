import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/features/movies/service/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  private subcription: Subscription | undefined;
  movie!: Movie;
  moviesCart: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MovieService,
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.subcription = this.moviesService.getDetail(this.activatedRoute.snapshot.params['id']).subscribe(
      movie => {
        if (movie != undefined) this.movie = movie;
      }
    )
    this.cartService.getList().subscribe(movies => this.moviesCart = movies);
  }
  add(movie1: Movie){
    this.cartService.add(movie1);
  };

  ngOnDestroy(): void {
  this.subcription?.unsubscribe() }


}
