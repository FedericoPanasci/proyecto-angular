import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { PersonaItemComponent } from './components/persona-item/persona-item.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdmMovieComponent } from './components/adm-movie/adm-movie.component';
import { AdmMovieListComponent } from './components/adm-movie-list/adm-movie-list.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SingOutComponent } from './components/sing-out/sing-out.component';
import { loginReducer } from './features/login-redux/store/login.reducer';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    MenuComponent,
    MyAccountComponent,
    HooksComponent,
    PersonaItemComponent,
    PersonaListComponent,
    AdmMovieComponent,
    AdmMovieListComponent,
    AdmMovieComponent,
    AdmMovieListComponent,
    SingOutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ login: loginReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],

})
export class AppModule { }
