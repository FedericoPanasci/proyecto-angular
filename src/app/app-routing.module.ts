import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmMovieListComponent } from './components/adm-movie-list/adm-movie-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { LoginComponent } from './components/login/login.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // {
  //   path: 'peliculas/:id',
  //   component: MovieDetailComponent
  // },
  // {
  //   path: 'peliculas',
  //   component: MoviesComponent
  // },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'admin',
    component: AdmMovieListComponent
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'hooks',
    component: HooksComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mi-cuenta',
    component: MyAccountComponent
  },
  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
