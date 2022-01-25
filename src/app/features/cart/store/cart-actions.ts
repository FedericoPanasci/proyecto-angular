import { createAction, props } from "@ngrx/store";
import { MovieAPI } from "src/app/models/movieApi.model";

export const cartAddMovie = createAction(
'Cart - Add Movie',
props<{ movie: MovieAPI }>()
);

export const cartDeleteMovie = createAction(
'Cart - Delete movie',
props<{ movie: MovieAPI }>()
);

export const cartClear = createAction(
'Cart - Clear Cart',
);

export const cartSetContent = createAction(
'Cart - Set cart content',
props<{ movies: MovieAPI[] }>()
)
