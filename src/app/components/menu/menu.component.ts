import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginUser } from 'src/app/features/login-redux/login.model';
import { loginState } from 'src/app/features/login-redux/store/login-state.model';
import { showUser } from 'src/app/features/login-redux/store/login.actions';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // userDisplay$: Observable<LoginService> | string = '';
  user: LoginUser = {
    user: "admin",
    role: ""
  }
  constructor(
    private store: Store<loginState>,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    // this.user$.pipe(select(showUser))
    // this.userDisplay$ = this.loginService.getUserInfo();
    const role = JSON.parse(localStorage.getItem('role') || "");
    this.user.role = role;
  }
}
