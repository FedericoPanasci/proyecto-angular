import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { userMock } from './user.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  usuario: User[] = [];
  private url = environment.UserRestApi + 'users';


  constructor(
    private httpClient: HttpClient
  ) {}


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

  getList(id: string): Observable <User[]>{
    return this.httpClient.get<User[]>(this.url);
  }
}
