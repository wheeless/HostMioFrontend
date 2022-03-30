import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { URL } from '../models/task';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  APIHost = 'https://api.hostmonkey.io';
  //APIHost = 'http://localhost:46001';

  APIv1Path = '/api/v1/links/';
  devDomain = 'http://localhost:46001/api/v1/links';

  getUrl(shortUrl: string): Observable<URL> {
    return this.http.get<URL>(this.APIHost + this.APIv1Path + shortUrl).pipe(
      retry(1),
      catchError((error) => {
        this.router.navigateByUrl('/404');
        // this.handleError;
        return throwError(error);
      })
    );
  }

  // getUrlCatchError(shortUrl: string): Observable<URL> {
  //   return this.http.get<URL>(this.APIHost + this.APIv1Path + shortUrl).pipe(
  //     catchError((error) => {
  //       console.log(error);
  //       alert('error');
  //       this.handleError;
  //       return throwError('Error in getUrlCatchError');
  //     })
  //   );
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `,
  //       error.error
  //     );
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     () => new Error('Something bad happened; please try again later.')
  //   );
  // }

  constructor(private http: HttpClient, private router: Router) {}
}
