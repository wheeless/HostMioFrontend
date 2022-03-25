import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from '../models/task';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  // APIHost = 'https://api.hostmonkey.io';
  APIHost = 'http://localhost:46001';

  APIv1Path = '/api/v1/links/';
  devDomain = 'http://localhost:46001/api/v1/links';

  getTask(shortUrl: string): Observable<URL> {
    return this.http.get<URL>(this.APIHost + this.APIv1Path + shortUrl);
  }

  constructor(private http: HttpClient) {}
}
