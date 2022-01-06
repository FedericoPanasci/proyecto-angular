import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieAPI } from 'src/app/models/movieApi.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adm-movie',
  templateUrl: './adm-movie.component.html',
  styleUrls: ['./adm-movie.component.scss']
})
export class AdmMovieComponent implements OnInit {

  @Output() selected = new EventEmitter<MovieAPI>();

  selectedMoie: MovieAPI = {
    title: '',
    poster_path: '',
    adult: false,
    backdrop_path: '',
    id: '',
    genre_ids: [],
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    release_date: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  };

  @Input() movie: MovieAPI = {
    title: '',
    poster_path: '',
    adult: false,
    backdrop_path: '',
    id: '',
    genre_ids: [],
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    release_date: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  };

  urlPath = environment.imageApi;
  constructor() { }

  ngOnInit(): void {
  }

  clickPersona(movie: MovieAPI) {
    this.movie = movie;
    this.selected.emit(movie);
  }
}
