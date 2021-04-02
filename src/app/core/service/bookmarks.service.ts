import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(private http: HttpClient) { }

  getCategoies() {
    return this.http.get(`${environment.base_url}/admin/category`);
  }

  createBookmarks(bookmarksValue) {
    return this.http.post(`${environment.base_url}/user/post`, bookmarksValue);
  }

  getUsersBookmarks() {
    return this.http.get(`${environment.base_url}/user/post`);
  }

  getAllBookmarks() {
    return this.http.get(`${environment.base_url}/admin/post`);
  }

  getPublicBookmarks() {
    return this.http.get(`${environment.base_url}/post`);
  }

  deleteBookmarks(bookkmarkId) {
    return this.http.delete(`${environment.base_url}/user/post/${bookkmarkId}`);
  }

  searchBookmarks(searchBy: string) {

    const httpParams = new HttpParams().set('searchBy', searchBy);
    return this.http.get(`${environment.base_url}/post/search`, { params: httpParams });
  }

  searchBookmarksByAdmin(searchBy: string) {
    const httpParams = new HttpParams().set('searchBy', searchBy);
    return this.http.get(`${environment.base_url}/admin/post/search`, { params: httpParams });
  }

  searchBookmarksByUser(searchBy: string) {
    const httpParams = new HttpParams().set('searchBy', searchBy);
    return this.http.get(`${environment.base_url}/user/post/search`, { params: httpParams });
  }
}
