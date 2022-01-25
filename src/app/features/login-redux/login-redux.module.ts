import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/login.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginReduxRoutingModule } from './login-routing.module';
import { LoginComponent } from 'src/app/components/login/login.component';


@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    StoreModule.forFeature('login', loginReducer),
    MaterialModule,
    ReactiveFormsModule,
    LoginReduxRoutingModule
  ]
})
export class loginReduxModule { }
