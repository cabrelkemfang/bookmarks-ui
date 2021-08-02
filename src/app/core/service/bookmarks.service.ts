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
    return this.http.post(`${environment.base_url}/users/bookmarks`, bookmarksValue);
  }

  getUsersBookmarks(page: number) {
    const httpParams = new HttpParams().set('page', page.toString());
    return this.http.get(`${environment.base_url}/users/bookmarks`, { params: httpParams });
  }

  getAllBookmarks(page: number) {
    const httpParams = new HttpParams().set('page', page.toString());
    return this.http.get(`${environment.base_url}/admin/bookmarks`, { params: httpParams });
  }

  getPublicBookmarks(page: number) {
    const httpParams = new HttpParams().set('page', page.toString());
    return this.http.get(`${environment.base_url}/bookmarks`, { params: httpParams });
  }

  deleteBookmarks(bookkmarkId) {
    return this.http.delete(`${environment.base_url}/users/bookmarks/${bookkmarkId}`);
  }

  searchBookmarks(searchBy: string) {
    const httpParams = new HttpParams().set('searchBy', searchBy);
    return this.http.get(`${environment.base_url}/bookmarks/search`, { params: httpParams });
  }

  searchBookmarksByAdmin(searchBy: string) {
    const httpParams = new HttpParams().set('searchBy', searchBy);
    return this.http.get(`${environment.base_url}/admin/bookmarks/search`, { params: httpParams });
  }

  searchBookmarksByUser(searchBy: string) {
    const httpParams = new HttpParams().set('searchBy', searchBy);
    return this.http.get(`${environment.base_url}/users/bookmarks/search`, { params: httpParams });
  }
}
