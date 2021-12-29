import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User[] = [];

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    mail: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    age: new FormControl('', [Validators.required, Validators.max(99)]),
  })
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const name = this.userForm.controls['name'];
    const password = this.userForm.controls['password'];
    const age = this.userForm.controls['age'];
    const mail = this.userForm.controls['mail'];

    //this.userService.getList().subscribe(user => this.user = user);
    //this.userService.add(this.userForm);
  }

  validateRegister(){
    this.userService.construct(this.userForm.controls['name'].value,
    this.userForm.controls['mail'].value,
    this.userForm.controls['password'].value,
    this.userForm.controls['age'].value);

    let array : User = {
      name: this.userForm.controls['name'].value,
      mail: this.userForm.controls['mail'].value,
      password: this.userForm.controls['password'].value,
      age: this.userForm.controls['age'].value,
      id: this.user.length+1,
    }

    this.userService.add(array);
    //this.user.push(this.userService.construct(this.userForm.controls['name'].value, this.userForm.controls['password'].value, this.userForm.controls['age'].value, this.userForm.controls['mail'].value));
  }


  // validateRegister(){
  //   let usuario : User[] = this.userService.construct(this.userForm.controls['name'].value,
  //   this.userForm.controls['password'].value,
  //   this.userForm.controls['age'].value,
  //   this.userForm.controls['mail'].value)
  //   usuario.forEach(user =>{
  //     this.user.push(user);
  //   })

  // }
}
