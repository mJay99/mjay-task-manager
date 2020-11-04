import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = "0gY8DizqG5SSi3xmRI7kft8iDc5HEmmK"
        // add authorization header with jwt token if available
        if (token) {
            request = request.clone({
                setHeaders: {
                    AuthToken: `${token}`
                }
            });
        }

        return next.handle(request);
    }


}