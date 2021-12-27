import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from 'src/app/features/movies/components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';


const routes: Routes = [
  {
    path: ':id',
    component: MovieDetailComponent
  },
  {
    path: '',
    component: MoviesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MoviesRoutingModule { }
