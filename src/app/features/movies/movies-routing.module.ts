import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from 'src/app/features/movies/components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CartEffects } from '../cart/store/cart.effects';
import { cartReducer } from '../cart/store/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


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
    RouterModule.forChild(routes),
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects])
    ]
})
export class MoviesRoutingModule { }
