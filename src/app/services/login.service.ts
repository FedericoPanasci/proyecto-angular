import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { userMock } from './user.mock';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User[] = [];
  constructor() { }

  validateLogin(mail: string, password: string): boolean{
    const usuario = this.user.find(usuario => {
      if (usuario.mail === mail){
        if (usuario.password === password){
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    })
    return false;
  }

  getList(): Observable<User[]>{
    return of(userMock);
  }
}
