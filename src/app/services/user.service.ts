import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{



  usuario: User[] = [];
  private url = environment.UserRestApi + 'users';


  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   this.httpClient.get<User[]>(this.url).subscribe(response => this.usuario = response);
  // }

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

  getList(): Observable <User[]>{
    return this.httpClient.get<User[]>(this.url);
  }
}
