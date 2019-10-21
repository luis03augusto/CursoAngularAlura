import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForOfContext } from '@angular/common';
import { TokenService } from '../token/token.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ResquestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.tokenService.hasToken()) {
            const token = this.tokenService.getToken();
            req = req.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return next.handle(req);
    }

}