import { createReducer, on } from "@ngrx/store";
import { loginState } from "./login-state.model";
import { showUser } from "./login.actions";

export const stateInitial: loginState = {
  title: 'Nesfliz',
  role: 'Bienvenido a '
}

const _loginReducer = createReducer(
  stateInitial,
  on(showUser, (state, {title, role}) => {
    return {
      ...state,
      title: title,
      role: role}
  })
)

export function loginReducer(state: any, action: any){
  return _loginReducer(state, action)
}
