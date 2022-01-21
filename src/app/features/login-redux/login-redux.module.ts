import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/login.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';


@NgModule({
  declarations: [
    LoginComponent
  ], 

  imports: [
    CommonModule,
    StoreModule.forFeature('user', loginReducer),
    MaterialModule,
    ReactiveFormsModule,
    loginReduxModule
  ]
})
export class loginReduxModule { }
