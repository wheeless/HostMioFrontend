import { Injectable } from '@angular/core';
import { URL } from '../models/task';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { RedirectService } from '../services/redirect.service';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinkResolver implements Resolve<URL> {
  constructor(private service: RedirectService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<URL> | Promise<URL> | URL {
    return this.service.getUrl(route.paramMap.get('shortUrl'));
  }
}
