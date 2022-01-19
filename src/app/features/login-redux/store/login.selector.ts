import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loginState } from "./login-state.model";

export const loginStateSelector = createFeatureSelector<loginState>('login');

export const loginSelector = createSelector(

  loginStateSelector,

  (state: loginState) => state

);
