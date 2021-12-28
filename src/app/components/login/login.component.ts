import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User[] = [];

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

  constructor(
    private loginService: LoginService,
    ) {
  }

  ngOnInit(): void {
    //cargo lo que devuelve el observable en user
    //this.loginService.getList().subscribe((user) => (this.user = user));
    this.user = this.loginService.getList();
  }

  validateLogin(): boolean {
    this.user.forEach((usuario) => {
      if (usuario.mail === this.userForm.controls['mail'].value) {
        console.log('mail valido');
        if (usuario.password === this.userForm.controls['password'].value) {
          console.log('contraseña valido');
          return true;
        }
        console.log('contraseña invalida');
        return false;
      }
      console.log('mail invalido');
      return false;
    });
    return false;
  }

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
