import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { URL } from '../models/task';
import { map, catchError, retry, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  APIHost = 'https://api.avernix.com';
  //APIHost = 'http://localhost:46001';
  APIv1Path = '/api/v1/links';

  data: any;

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else if (error.status === 404) {
      // The requested resource doesn't exist.
      this.failToast(`${error.error.message}`);
      console.error('An error occurred:', error.message);
    } else if (error.status === 500 || error.status === 504) {
      // The server encountered an error.
      this.failToast(
        'Server is not responding or API rate limiting hit: ' +
          error.error.message
      );
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error.message
      );
      // Return an observable with a user-facing error message.
      return throwError(
        () => new Error('Something bad happened; please try again later.')
      );
    }
  }

  failToast(message) {
    this.toast.error(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }

  getUrl(shortUrl: string): Observable<any> {
    const releaseUrl = `${this.APIHost}${this.APIv1Path}`;
    const combinedUrl = `${releaseUrl}/${shortUrl}`;
    return this.http.get(combinedUrl).pipe(
      retry(1),
      catchError((error) => {
        this.router.navigateByUrl('/404');
        return this.handleError(error);
      })
    );
  }

  incrementClicks(shortUrl: string): Observable<URL> {
    const releaseUrl = `${this.APIHost}${this.APIv1Path}`;
    const combinedUrl = `${releaseUrl}/${shortUrl}/incrementClicks`;
    return this.http.patch<URL>(combinedUrl, URL).pipe(
      catchError((error) => {
        this.router.navigateByUrl('/404');
        return this.handleError(error);
      })
    );
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: HotToastService
  ) {}
}
