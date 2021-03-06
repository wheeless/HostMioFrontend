import { Injectable } from '@angular/core';
import { URL } from '../models/task';
import { RedirectService } from '../services/redirect.service';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LinkResolver implements Resolve<URL> {
  constructor(
    private service: RedirectService,
    private toast: HotToastService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<URL> | Promise<URL> | URL {
    return this.service.getUrl(route.paramMap.get('shortUrl')).pipe(
      retry(1),
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  failToast(message) {
    this.toast.error(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
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
}
