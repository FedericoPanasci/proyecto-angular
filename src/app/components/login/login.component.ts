import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
// import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User[] = [];
  error!: string;
  login: boolean = false;

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

  newUser: any[] = [];

  saveUser() {
    //guardo los datos del forms en el array
    this.newUser.push(this.userForm.value);
    console.log(this.newUser);

    this.userForm.reset();
  }
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    this.loginService
      .validateCredentials(this.mailControl.value, this.passwordControl.value)
      .subscribe((valid) => {
        console.log(valid);
        Swal.fire({
          icon: 'success',
          title: 'Welcome again',
          showConfirmButton: false,
          timer: 1500,
        });
        if (valid) {
          this.login = true;
          this.router.navigate(['peliculas']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User or Password invalid',
            footer: 'Please, try again',
          });
          this.error = 'User or Password invalid';
        }
      });
  }

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
