import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { NavigationService } from '../../services/navigation.service';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PagenotfoundComponent implements OnInit {
  constructor(
    private navigation: NavigationService,
    private toast: HotToastService
  ) {}
  goBack(): void {
    this.navigation.back();
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

  ngOnInit() {
    catchError((error) => {
      return this.handleError(error);
    });
  }
}
