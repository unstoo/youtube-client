import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { AuthService } from '../auth/auth.service';
import { KEY } from '../const/YT_KEY';
import { YT_BASE_URL } from '../const/YT_BASE_URL';
import { NEVER } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.authService.isAuth()) {
      this.authService.logout();
      return NEVER;
    }
    const withBaseUrl = req.clone({ url: YT_BASE_URL + req.url });
    const withKey = withBaseUrl.clone({ setParams: { key: KEY } });

    return next.handle(withKey);
  }
}
