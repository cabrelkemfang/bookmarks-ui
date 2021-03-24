import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptorService implements HttpInterceptor {

  constructor(private notificationService: NotificationService) { }
  /**
 * Intercepts a Http request and adds a default error handler.
 */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.handleError(error)));
  }

  /**
  * Error handler.
  */
  private handleError(response: HttpErrorResponse): Observable<HttpEvent<any>> {
    const status = response.status;
    let errors = response.error.errors;
    // let errorMessage = (response.error.developerMessage || response.message);


    // if (response.error.errors) {
    //   let errors = response.error.errors;

    //   if (errors) {
    //     let errorArray = errors[Object.keys(errors)[0]];
    //     this.notificationService.warn(errorArray[0].message);
    //   }
    // }

    console.log(response.error.message);
    console.log(response);


    if (status === 401) {
      // if (response.error.error === "") {
      //   this.notificationService.warn(response.error.message);
      // }
      if (errors[Object.keys(errors)[0]]) {
        let errorArray = errors[Object.keys(errors)[0]];
        this.notificationService.warn(errorArray[0].message);
      } else {
        this.notificationService.warn(response.error.message);
      }

    } else if (status === 400) {
      if (errors[Object.keys(errors)[0]]) {
        let errorArray = errors[Object.keys(errors)[0]];
        this.notificationService.warn(errorArray[0].message);
      }
      else {
        this.notificationService.warn(response.error.message);
      }

    } else if (status === 403) {
      this.notificationService.warn('You are not authorized for this request!');
    } else if (status === 404) {
      this.notificationService.warn('Resource does not exist!');
    } else if (status === 500) {
      this.notificationService.warn('Internal Server Error. Please try again later');
    } else {
      this.notificationService.warn('Connection Error. You Are not Connected To the Internet.');
    }

    throw response;
  }

}
