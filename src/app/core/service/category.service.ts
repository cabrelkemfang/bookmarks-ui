import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<any> {
    return this.http.get(`${environment.base_url}/admin/category`);
  }

  deleteCategory(categoryId): Observable<any> {
    return this.http.delete(`${environment.base_url}/admin/category/${categoryId}`);
  }

  createCategory(category): Observable<any> {
    return this.http.post(`${environment.base_url}/admin/category`, category);
  }

  searchCategory(searchBy: string) : Observable<any> {
    const httpParams = new HttpParams().set('searchBy', searchBy);
    return this.http.get(`${environment.base_url}/admin/category/search`, { params: httpParams });
  }
}
