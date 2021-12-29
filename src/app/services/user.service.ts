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
  private url = environment.UserRestApi + 'users';


  constructor(private httpClient: HttpClient,
    private loginService: LoginService) {}
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

  add(usuario: User){
    return this.httpClient.post<User>(this.url, JSON.stringify(usuario));
  };

  get(mail: string){
    return this.usuario.find(element => {
      element.mail === mail;
    });
  };

  validate(){
    const user = "algo"
    const password = "algo"

    this.loginService.validate(user, password).subscribe(response => console.log(response));
  }
  getList(): Observable <User[]>{
    return this.httpClient.get<User[]>(this.url);
  }
}
