import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { userMock } from './user.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: User[] = [];

  constructor() {}

  construct(name: string, password: string, age: number, mail: string): User [] {
    let usuario: User = {
      name: name,
      mail: mail,
      password: password,
      age: age
    }
    this.usuario.push(usuario);
    return this.usuario;
  }


  add(user: User){
    return this.usuario.push(user);
  };

  get(mail: string){
    return this.usuario.find(element => {
      element.mail === mail;
    });
  };

  getList(): Observable<User[]>{
    return of(userMock);
  }
}
