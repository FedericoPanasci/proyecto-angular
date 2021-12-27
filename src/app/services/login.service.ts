import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { userMock } from './user.mock';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private subscribe: Subscription | undefined;
  user: User[] = [];
  private url = environment.UserRestApi + 'users';

  constructor(
    private httpClient: HttpClient
  ) { }



  getList(): Observable<User[]> | undefined {
    return this.httpClient.get<User[]>(`${this.url}`);
  }
}
