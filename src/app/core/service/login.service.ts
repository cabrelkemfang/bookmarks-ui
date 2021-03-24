import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Login } from 'src/app/core/model/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /**
    * Initializes the type of storage and authorization headers depending on whether
    * credentials are presently in storage or not.
    * @param {HttpClient} http Http Client to send requests.
    * @param {NotificationService} notificationService NotificationService Service.
    */
  constructor(private http: HttpClient) {
  }

  /**
   * @param {any} group Group to be created.
   * @returns {Observable<any>}
   */
  login(login: Login): Observable<any> {
    let params = new URLSearchParams();
    params.append('username', login.email);
    params.append('password', login.password);
    params.append('grant_type', environment.grant_type);
    params.append('client_id', environment.client_id);

    return this.http.post(`${environment.base_url1}/oauth/token`, params.toString());
  }

  signup(signupData): Observable<any> {
    return this.http.post('/oauth/sign-up', signupData);
  }

  getUserInfo(): Observable<any> {
    return this.http.get(`${environment.base_url}/oauth/user-info`);
  }
}