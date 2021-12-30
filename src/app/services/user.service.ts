import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  usuario: User[] = [];
  private url = environment.UserRestApi;

  constructor(private httpClient: HttpClient,
    ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  add(usuario: User):Observable<User>{
    return this.httpClient.post<User>(this.url, usuario);
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
