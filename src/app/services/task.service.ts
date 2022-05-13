import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL } from '../models/task';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  APIHost = 'https://api.hostmonkey.io';
  // APIHost = 'http://localhost:46001';

  APIv1Path = '/api/v1/links/';

  getTasks(): Observable<URL[]> {
    return this.http.get<URL[]>(this.APIHost + this.APIv1Path).pipe(
      this.toast.observe({
        loading: 'Loading...',
        success: (s) => 'Loaded Links!',
        error: (e) => 'Whoa! I could not load the links for some reason.',
      }),
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  // getTask(shortUrl: string): Observable<URL> {
  //   return this.http.get<URL>(this.domain + '/' + shortUrl);
  // }

  getTask(shortUrl: string): Observable<any> {
    return this.http
      .get<URL>(this.APIHost + this.APIv1Path + shortUrl + '/stats')
      .pipe(
        this.toast.observe({
          loading: 'Loading...',
          success: () => 'Loaded Link',
          error: (e) => 'Link could not be loaded: ',
        }),
        catchError((error) => {
          this.router.navigateByUrl('/404');
          return this.handleError(error);
        })
      );
  }

  addTask(url: URL): Observable<URL> {
    return this.http.post<URL>(this.APIHost + this.APIv1Path, url).pipe(
      this.toast.observe({
        loading: 'Adding...',
        success: () => 'Link Added',
        error: (e) => 'Link could not be added: ',
      }),
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  deleteTask(id: number): Observable<URL> {
    return this.http.delete<URL>(this.APIHost + this.APIv1Path + id).pipe(
      this.toast.observe({
        loading: 'Deleting...',
        success: () => 'Link Deleted',
        error: (e) => 'Link could not be Deleted: ',
      }),
      catchError((error) => {
        this.router.navigateByUrl('/404');
        return this.handleError(error);
      })
    );
  }

  editTask(url: URL): Observable<URL> {
    return this.http.put<URL>(this.APIHost + '/' + url._id, url).pipe(
      this.toast.observe({
        loading: 'Saving...',
        success: () => 'Link Saved!',
        error: (e) => 'Link could not be saved: ',
      }),
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
        this.toast.observe({
          loading: 'Extending Expire Date...',
          success: () => 'Expire date extended',
          error: (e) => 'Expire date could not be extended: ',
        }),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      this.failToast(`${error.status}: Well this is awkward: ` + error.message);
      console.error('An error occurred:', error.message);
    } else if (error.status === 404) {
      // The requested resource doesn't exist.
      this.failToast('The requested resource does not exist: ' + error.message);
      console.error('An error occurred:', error.message);
    } else if (error.status === 500 || error.status === 504) {
      // The server encountered an error.
      this.failToast(
        'Server is not responding or API rate limiting hit: ' + error.message
      );
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      this.failToast(`Backend returned code ${error.status}: ` + error.message);
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.message
      );
      return throwError(
        () => new Error('Something bad happened; please try again later.')
      );
    }
    // Return an observable with a user-facing error message.
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
