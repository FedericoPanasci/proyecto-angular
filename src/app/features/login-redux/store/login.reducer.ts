import { createReducer, on } from "@ngrx/store";
import { loginState } from "./login-state.model";
import { showUser } from "./login.actions";

export const stateInitial: loginState = {
  user: "",
  role: ""
}
// let userShow: loginState;
const _loginReducer = createReducer(
  stateInitial,
  on(showUser, (state, {User}) => {
    return {...state, User}
  })
)

export function loginReducer(state: any, action: any){
  return _loginReducer(state, action)
}
