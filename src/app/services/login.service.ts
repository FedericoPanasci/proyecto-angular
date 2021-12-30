import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  private subscribe: Subscription | undefined;
  user: User[] = [];
  private url = environment.UserRestApi + 'users';

  constructor(
    private userService: UserService,
    private httpClient: HttpClient,
  ) {
    this.userService.getList().subscribe(response => this.user = response);
  }
  ngOnInit(): void {
  }

  validate(mail: string, password: string):boolean{
    let valid: boolean = false;
    this.user.forEach(usuario => {
      if(usuario.mail === mail && usuario.password === password){
        valid = true;
      }
    })
    return valid;
  }
}
