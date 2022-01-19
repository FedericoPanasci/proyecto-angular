import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const showUser = createAction(
  'Login - show user',
  props<{User: User | any}>()
)

