import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { URL } from '../models/task';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, Observable, of, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  APIHost = 'https://api.hostmonkey.io';
  // APIHost = 'http://localhost:46001';

  APIv1Path = '/api/v1/links/';
  devDomain = 'http://localhost:46001/api/v1/links';

  getTasks(): Observable<URL[]> {
    return this.http.get<URL[]>(this.APIHost + this.APIv1Path).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  // getTask(shortUrl: string): Observable<URL> {
  //   return this.http.get<URL>(this.domain + '/' + shortUrl);
  // }

  getTask(shortUrl: string): Observable<URL> {
    return this.http
      .get<URL>(this.APIHost + this.APIv1Path + shortUrl + '/stats')
      .pipe(
        catchError((error) => {
          this.router.navigateByUrl('/404');
          return this.handleError(error);
        })
      );
  }

  addTask(url: URL): Observable<URL> {
    return this.http.post<URL>(this.APIHost + this.APIv1Path, url).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  deleteTask(id: number): Observable<URL> {
    return this.http.delete<URL>(this.APIHost + this.APIv1Path + id).pipe(
      catchError((error) => {
        this.router.navigateByUrl('/404');
        return this.handleError(error);
      })
    );
  }

  editTask(url: URL): Observable<URL> {
    return this.http.put<URL>(this.APIHost + '/' + url._id, url).pipe(
      catchError((error) => {
        this.router.navigateByUrl('/404');
        return this.handleError(error);
      })
    );
  }

  patchExpireDate(shortUrl: string): Observable<URL> {
    return this.http
      .patch<URL>(this.APIHost + this.APIv1Path + shortUrl + '/expire', URL)
      .pipe(
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      this.failToast(
        'Server is not responding or API rate limiting hit: ' + error.message
      );
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      this.failToast(`Backend returned code ${error.status}, url not found`);
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.message
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  successToast(message) {
    this.toast.success(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  infoToast(message) {
    this.toast.info(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  failToast(message) {
    this.toast.error(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  warnToast(message) {
    this.toast.warning(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }

  constructor(
    private http: HttpClient,
    private toast: HotToastService,
    private router: Router
  ) {}
}
