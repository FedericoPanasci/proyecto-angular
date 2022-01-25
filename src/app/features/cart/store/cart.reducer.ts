import { createReducer, on } from '@ngrx/store';
import { cartSetContent } from './cart-actions';
import { CartState } from './cart-store.model';


export const cartInitialState: CartState = { movies: [] };

const _cartReducer = createReducer(
  cartInitialState,

  on(cartSetContent, (state, { movies }) => {
      return {
      ...state,
      movies,
    };
  })
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
