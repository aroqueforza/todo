import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjllY2U0MDI0LWUyZDUtNGU3NS05MDU2LWY0NWRjN2E5MWE2YSIsIlhhZlNlY3VyaXR5QXV0aFBhc3NlZCI6IlhhZlNlY3VyaXR5QXV0aFBhc3NlZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsIlhhZlNlY3VyaXR5IjoiWGFmU2VjdXJpdHkiLCJYYWZMb2dvblBhcmFtcyI6InExWXFMVTR0OGt2TVRWV3lVa3BNeWMzTVU5SlJLa2dzTGk3UEwwb0JDaW5WQWdBPSIsImV4cCI6MTcyMDgwMzM4OX0.m7SBESVIQa0hpU-2zDLAghd7ePBGR67BcZJDkNrvnG8'

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
    }

    return next.handle(request)
    .pipe(map(event => { return event; }))
    .pipe(catchError((response: any) => {
      if (response.status === 401) {
        response.error = {error: {message: 'Session expired.'}};
      }

      return throwError(response);
    }));
  }
}
