import { createAction, props } from "@ngrx/store";

export const showUser = createAction(
  'Login - show user',
  props<{ title: string, role: string }>()
)

export const cleanUser = createAction(
  'LogOut - clear user'
)
