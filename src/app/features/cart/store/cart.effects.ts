import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { MovieAPI } from 'src/app/models/movieApi.model';
import { CartService } from 'src/app/services/cart.service';
import { cartAddMovie, cartClear, cartDeleteMovie, cartSetContent } from './cart-actions';

@Injectable()
export class CartEffects {

  constructor(
    private actions: Actions,
    // private store: Store,
    private cartService: CartService
  ) {}

  cartAddItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(cartAddMovie),
      switchMap(action => this.cartService.addCartApi(action.movie)),
      map(data => cartSetContent({movies: data.cartContent as MovieAPI[]}))
    )
  );

  cartDeleteItem$ = createEffect(() =>
  this.actions.pipe(
    ofType(cartDeleteMovie),
    switchMap(action => this.cartService.removeCartApi(action.movie)),
    map(data => cartSetContent({movies: data.cartContent as MovieAPI[]}))
  )
);

  cartClear$ = createEffect(() =>
  this.actions.pipe(
    ofType(cartClear),
    switchMap(action => this.cartService.clearCartApi()),
    map(data => cartSetContent({movies: [] as MovieAPI[]}))
  )
);
}
