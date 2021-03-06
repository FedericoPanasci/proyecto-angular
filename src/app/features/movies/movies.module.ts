import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { MovieDetailComponent } from 'src/app/features/movies/components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule
  ]
})
export class MoviesModule { }
