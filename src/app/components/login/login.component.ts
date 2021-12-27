import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { userMock } from 'src/app/services/user.mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User[] = [];

  userForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
  })

  //loginService: LoginService | undefined;

  // constructor(private loginService: LoginService) { }

  // ngOnInit(): void {
  //   this.loginService.getList().subscribe(user => this.user = user);
  // }

  // loginService.valid(user);


  // validateLogin(): boolean{
  //   this.user.forEach(usuario => {
  //     if(usuario.mail === this.userForm.controls['mail'].value){
  //       console.log('mail valido');
  //       if(usuario.password === this.userForm.controls['password'].value){
  //         console.log('contraseña valido');
  //         return true;
  //       }
  //       console.log('contraseña invalida');
  //       return false;
  //     }
  //     console.log('mail invalido');
  //     return false;
  //   });
  //   return false;
  // }
}
