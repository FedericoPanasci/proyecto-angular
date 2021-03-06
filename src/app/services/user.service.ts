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
  private url = environment.loginRestApi;

  constructor(private httpClient: HttpClient,
    ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  add(usuario: User):Observable<User>{
    // const SECURE_KEY_APP = "clave";
    // const token = Jwt.sign(payload, SECURE_KEY_APP);
    return this.httpClient.post<User>(`${this.url}/addUser`, usuario);
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
