import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { User } from '../models/user.model';
// import { UserService } from './user.service';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  private token: any = null;
  private user = '';
  private userName = '';
  private role = '';

  url = `${environment.loginRestApi}`;

  // private subscribe: Subscription | undefined;
  // user: User[] = [];
  // private url = environment.UserRestApi + 'users';

  constructor(
    // private userService: UserService,
    private httpClient: HttpClient,
  ) {
    // this.userService.getList().subscribe(response => this.user = response);
  }
  ngOnInit(): void {
  }

  // validate(mail: string, password: string):boolean{
  //   let valid: boolean = false;
  //   this.user.forEach(usuario => {
  //     if(usuario.mail === mail && usuario.password === password){
  //       valid = true;
  //     }
  //   })
  //   return valid;
  // }

  //-------loginApi
  validateCredentials(user: string, password: string): Observable<boolean> {
    console.log(user);
    return this.httpClient.post<any>(this.url, { user, password })
    .pipe (
      map(response => {
        console.log(response);
        if (response.status === 'OK') {
          this.token = response.token;
          const decodedToken: any = jwt_decode(this.token);
          this.user = decodedToken?.user;
          this.userName = decodedToken?.userName;
          this.role = decodedToken?.role;
          return true;
        } else {
          this.token = null;
          return false;
        }
      })
    )
  }

  getToken(): any {
    return this.token;
  }

  isUserLoggedIn(): boolean {
    return this.user !== '';
  }

  getUserInfo(): any {
    return {
      user: this.user,
      userName: this.userName,
      role: this.role,
      token: this.token
    }
  }
}
