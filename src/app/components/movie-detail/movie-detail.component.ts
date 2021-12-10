import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MovieService
  ) { }

  ngOnInit(): void {
    this.moviesService.getDetail(this.activatedRoute.snapshot.params['id']).subscribe(movie => console.log(movie));
  }

}
