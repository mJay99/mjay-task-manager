import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            console.error("Error code:", err.status)
            if (err.status === 401 || (err.status === 0 && err.statusText === "Unknown Error")) {
                  
            }
            console.error(err);
            const error = err.error.Errors ? err.error.Errors[0] : (err.error.message || err.statusText);
            return throwError(error);
        }))
    }
}