import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from '../models/task';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  APIHost = 'https://api.hostmonkey.io';
  // APIHost = 'http://localhost:46001';

  APIv1Path = '/api/v1/links/';
  devDomain = 'http://localhost:46001/api/v1/links';

  getTasks(): Observable<URL[]> {
    return this.http.get<URL[]>(this.APIHost + this.APIv1Path);
  }

  // getTask(shortUrl: string): Observable<URL> {
  //   return this.http.get<URL>(this.domain + '/' + shortUrl);
  // }

  getTask(shortUrl: string): Observable<URL> {
    return this.http.get<URL>(
      this.APIHost + this.APIv1Path + shortUrl + '/stats'
    );
  }

  addTask(url: URL): Observable<URL> {
    return this.http.post<URL>(this.APIHost + this.APIv1Path, url);
  }

  deleteTask(id: number): Observable<URL> {
    return this.http.delete<URL>(this.APIHost + this.APIv1Path + id);
  }

  editTask(url: URL): Observable<URL> {
    return this.http.put<URL>(this.APIHost + '/' + url._id, url);
  }

  patchExpireDate(shortUrl: string): Observable<URL> {
    return this.http.patch<URL>(
      this.APIHost + this.APIv1Path + shortUrl + '/expire',
      URL
    );
  }
  constructor(private http: HttpClient) {}
}
