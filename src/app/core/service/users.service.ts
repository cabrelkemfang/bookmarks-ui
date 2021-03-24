import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${environment.base_url}/admin/users`);
  }

  createUser(user) {
    return this.http.post(`${environment.base_url}/admin`, user)
  }

  /**
   * 
   * @param email email
   * @param status status
   */
  updateUserStatus(email: string, status: boolean): Observable<any> {
    return this.http.put(`${environment.base_url}/admin/user/${email}/status/${status}`, '');
  }

  deleteUser(userId) {
    return this.http.delete(`${environment.base_url}/admin/user/${userId}`);
  }
}
