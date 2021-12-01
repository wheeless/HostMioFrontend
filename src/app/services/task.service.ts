import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from '../models/task';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  domain = 'https://api.hostmonkey.io/api/v1/links';
  shortDomain = 'http://localhost:46001';
  getTasks(): Observable<URL[]> {
    return this.http.get<URL[]>(this.domain);
  }

  // getTask(shortUrl: string): Observable<URL> {
  //   return this.http.get<URL>(this.domain + '/' + shortUrl);
  // }
  getTask(shortUrl: string): Observable<URL> {
    return this.http.get<URL>(this.domain + '/' + shortUrl);
  }
  addTask(url: URL): Observable<URL> {
    return this.http.post<URL>(this.domain + '/', url);
  }

  deleteTask(id: number): Observable<URL> {
    return this.http.delete<URL>(this.domain + '/' + id);
  }

  editTask(url: URL): Observable<URL> {
    return this.http.put<URL>(this.domain + '/' + url._id, url);
  }

  constructor(private http: HttpClient) {}
}
