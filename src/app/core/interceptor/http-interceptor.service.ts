import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {


  constructor(private route: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = localStorage.getItem('token');

    if (this.route.url.startsWith('/login') && request.method === 'POST') {
      
      request = request.clone({
        setHeaders: {
          'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
          'Authorization': 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret)
        }
      });


    } else {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      if (token) {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
      }
    }
    return next.handle(request);
  }
}
