import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { observable, Observable, of, Subscription } from 'rxjs';
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
    private httpClient: HttpClient
  ) {
    this.userService.getList().subscribe((user) => (this.user = user));
  }
  ngOnInit(): void {
  }

  validate(mail: string, password: string):Observable<boolean>{
    return this.httpClient.post<boolean>(this.url, {mail, password});
  }
  getList():User[]{
    return this.user;
  }
}
