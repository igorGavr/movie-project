import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUwYWVlOTU0OWE0NmMzY2U1ZGJiM2Q0M2YwZjJlOSIsInN1YiI6IjYyODc4Nzc5ZWM0NTUyNzRjMjg2MDhlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vl7vLLjrvr-3ddQjjIQLhdtW9yYQdWk5N0M0Qbbt-9M'

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._token}`
      }
    })
    return next.handle(request);
  }
}
