import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(
    private loginService: LoginService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken();
    const apiLocal = req.url.startsWith(environment.loginRestApi);

    if(token !== null && apiLocal){
      req = req.clone({
        setHeaders: { Autorization: `Bearer ${token}`}
      })
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status === 404){
          console.log("error 404");
        }
        return throwError(() => err);
      })
    );
  }
}
