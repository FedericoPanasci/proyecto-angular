import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/features/movies/service/movie.service';
import { MovieAPI } from 'src/app/models/movieApi.model';

@Component({
  selector: 'app-adm-movie-list',
  templateUrl: './adm-movie-list.component.html',
  styleUrls: ['./adm-movie-list.component.scss']
})
export class AdmMovieListComponent implements OnInit {

  movieForm = new FormGroup({
    id: new FormControl(``, [Validators.required]),
    title: new FormControl(``, [Validators.required]),
    poster_path: new FormControl(``, [Validators.required]),
    overview: new FormControl(``, [Validators.required]),
    vote_average: new FormControl(``, [Validators.required, Validators.max(10)]),
    relase_date: new FormControl(``, [Validators.required])
  })

  title = this.movieForm.controls['title'];
  poster_path = this.movieForm.controls['poster_path'];
  overview = this.movieForm.controls['overview'];
  vote_average = this.movieForm.controls['vote_average'];
  relase_date = this.movieForm.controls['relase_date'];

  @Input() movies: MovieAPI[] = [];
  constructor(private movieService: MovieService) {
    this.movieService.getListMock().subscribe(response => {
      this.movies = response;
    })
   }

  ngOnInit(): void {
  }

  addMovie(){}
  deleteMovie(){}
  updateMovie(){}
}
