import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
// import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User[] = [];
  error!: string;

  userForm = new FormGroup({
    mail: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });

  mailControl = this.userForm.controls['mail'];
  passwordControl = this.userForm.controls['password'];

  newUser:any[] = [];

  saveUser(){
    //guardo los datos del forms en el array
    this.newUser.push(this.userForm.value);
    console.log(this.newUser);

    this.userForm.reset();

  }
  constructor(
    private loginService: LoginService,
    // private userService: UserService,
    private router: Router
    ) {
  }



  ngOnInit(): void {
    //cargo lo que devuelve el observable en user
    //this.loginService.getList().subscribe((user) => (this.user = user));
    // this.userService.getList().subscribe((user) => console.table(user));
  }
  submit() {
    // if (this.userForm.valid) {
    console.log("hola max estamos en submit")
    this.loginService.validateCredentials(this.mailControl.value, this.passwordControl.value)
      .subscribe(valid => {
        console.log(valid)
        if (valid) {
          this.router.navigate(['peliculas']);
        } else {
          this.error = 'User or Password invalid';
        }
      })
    // }
  }

  // validateLogin(){
  //   const verificar: boolean = this.loginService.validate(this.mailControl.value, this.passwordControl.value);
  //   if(verificar){
  //     this.router.navigate(['peliculas']);
  //   } else {
  //     alert("usuario o contraseña invalida");
  //   }
  //   // this.saveUser();

  //   // console.log(this.userForm.controls['mail'].value);
  //   // console.log("continua");
  //   // this.user.forEach((usuario) => {
  //   //   if (usuario.mail === this.userForm.controls['mail'].value) {
  //   //     console.log('mail valido');
  //   //     if (usuario.password === this.userForm.controls['password'].value) {
  //   //       console.log('contraseña valido');
  //   //       this.router.navigate(["peliculas"]);
  //   //       return true;
  //   //     }
  //   //     console.log('contraseña invalida');
  //   //     return false;
  //   //   }
  //   //   console.log('mail invalido');
  //   //   return false;
  //   // });
  //   // return false;
  // }

  //----- html - mail

  /** @title Form field with error messages */
  @Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css'],
  })

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //----- html - mail
  //----- html - password
  @Component({
    selector: 'form-field-prefix-suffix-example',
    templateUrl: 'form-field-prefix-suffix-example.html',
    styleUrls: ['form-field-prefix-suffix-example.css'],
  })
    hide = true;

  //----- html - password

}
