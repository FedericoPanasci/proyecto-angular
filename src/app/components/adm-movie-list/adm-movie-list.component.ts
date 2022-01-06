import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/features/movies/service/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { MovieAPI } from 'src/app/models/movieApi.model';

@Component({
  selector: 'app-adm-movie-list',
  templateUrl: './adm-movie-list.component.html',
  styleUrls: ['./adm-movie-list.component.scss']
})
export class AdmMovieListComponent implements OnInit {

  selectedMovie: MovieAPI = {
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

  movieForm = new FormGroup({
    id: new FormControl(``, [Validators.required]),
    title: new FormControl(``, [Validators.required]),
    poster_path: new FormControl(``, [Validators.required]),
    overview: new FormControl(``, [Validators.required]),
    vote_average: new FormControl(``, [Validators.required, Validators.max(10)]),
    release_date: new FormControl(``, [Validators.required])
  })

  title = this.movieForm.controls['title'];
  poster_path = this.movieForm.controls['poster_path'];
  overview = this.movieForm.controls['overview'];
  vote_average = this.movieForm.controls['vote_average'];
  release_date = this.movieForm.controls['release_date'];

  @Input() movies: MovieAPI[] = [];
  constructor(private movieService: MovieService) {
    this.movieService.getListMock().subscribe(response => {
      this.movies = response;
    })
   }

  ngOnInit(): void {
  }

  clickMovie(movie: MovieAPI) {
    this.selectedMovie = movie;
    console.log(movie)
    this.movieForm.controls['id'].setValue(movie.id);
    this.movieForm.controls['title'].setValue(movie.title);
    this.movieForm.controls['poster_path'].setValue(movie.poster_path);
    this.movieForm.controls['overview'].setValue(movie.overview);
    this.movieForm.controls['vote_average'].setValue(movie.vote_average);
    this.movieForm.controls['release_date'].setValue(movie.release_date);
    //this.selected.emit(movie);
  }

  isSelected(movie: MovieAPI):boolean{
    movie.id === this.selectedMovie.id
    return movie.id === this.selectedMovie.id;
  }

  addMovie(){
    let add: MovieAPI = {
      title: this.movieForm.controls['title'].value,
      poster_path: this.movieForm.controls['poster_path'].value,
      adult: false,
      backdrop_path: '',
      id: '',
      genre_ids: [],
      original_language: '',
      original_title: '',
      overview: this.movieForm.controls['overview'].value,
      popularity: 0,
      release_date: this.movieForm.controls['release_date'].value,
      video: false,
      vote_average: this.movieForm.controls['vote_average'].value,
      vote_count: 0
    };
    console.log(add.title);
    console.log(add.poster_path);
    console.log(add.overview);
    console.log(add.vote_average);

     this.movieService.addMovie(add).subscribe(response => {
       console.log(response);
     });
    this.movieForm.reset();
  }

  deleteMovie(){
    this.movieService.deleteMovie(this.selectedMovie.id).subscribe(response => {
      this.movieService.getListMock().subscribe(response =>{
        this.movies = response;
      })
    })
  }

  updateMovie(){
    let update: MovieAPI = {
      title: this.movieForm.controls['title'].value,
      poster_path: this.movieForm.controls['poster_path'].value,
      adult: false,
      backdrop_path: '',
      id: this.movieForm.controls['id'].value,
      genre_ids: [],
      original_language: '',
      original_title: '',
      overview: this.movieForm.controls['overview'].value,
      popularity: 0,
      release_date: this.movieForm.controls['release_date'].value,
      video: false,
      vote_average: this.movieForm.controls['vote_average'].value,
      vote_count: 0
    };
    console.log(update);
    this.movieService.updateMovie(update).subscribe(response => {
      this.movieService.getListMock().subscribe(response => {
        this.movies = response
      })
    });
  }
}
