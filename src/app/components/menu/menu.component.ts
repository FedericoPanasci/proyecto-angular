import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { LoginUser } from 'src/app/features/login-redux/login.model';
import { loginState } from 'src/app/features/login-redux/store/login-state.model';
import { showUser } from 'src/app/features/login-redux/store/login.actions';
import { loginSelector, loginStateSelector } from 'src/app/features/login-redux/store/login.selector';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // userDisplay$: Observable<LoginService> | string = '';

    constructor(
    private store: Store,
    private cartService: CartService,
    private loginService: LoginService,
    private router: Router

  ) { }

  state$: Observable<loginState> = of({title: '', role: ''});
  title$: string ="" //Observable<string> = of('');
  role$: string = "";
  ngOnInit(): void {
    this.state$ = this.store.pipe(
      select(loginSelector)
      )
      this.state$.subscribe(state => this.title$ = state.title);
      this.state$.subscribe(state => this.role$ = state.role);
    }

  singOut(){
    Swal.fire({
      title: 'ATENCION',
      text: "Estas por cerrar tu sesion y perderas todas las operaciones efectuadas sin guardar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesion'

    }).then((result) => {
      if (result.value) {
        this.cartService.clearCartApi().subscribe(response => {
          console.log(response);
        });
        this.loginService.singOut();
        this.store.dispatch(showUser({ title: "", role: "" }))
        Swal.fire(
          'Tu sesion ha sido cerrada',
          'Muchas gracias por visitarnos !',
          'success'
        )
        this.router.navigate(['login']);
      }
    })
  }
}
