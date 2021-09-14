import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { KEY } from '../const/YT_KEY';
import { YT_BASE_URL } from '../const/YT_BASE_URL';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const withBaseUrl = req.clone({ url: YT_BASE_URL + req.url });
    const withKey = withBaseUrl.clone({ setParams: { key: KEY } });

    return next.handle(withKey);
  }
}
