import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User[] = [];

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
  })


  constructor() { }

  ngOnInit(): void {
  }

}
