import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    // Não adicionar token para endpoints de login/register
    if (token && !this.isAuthEndpoint(request.url)) {

      let headers = new HttpHeaders()
        .append('Accept', 'application/json')
        .append('Authorization', `Bearer ${token}`);

      // Adicionar Content-Type apenas quando necessário
      if (this.shouldAddContentType(request)) {
        headers = headers.append('Content-Type', 'application/json');
      }

      request = request.clone({
        headers,
        reportProgress: true
      });
    }

    return next.handle(request);
  }

  private isAuthEndpoint(url: string): boolean {
    return url.includes('/login') || url.includes('/register');
  }

  private shouldAddContentType(request: HttpRequest<any>): boolean {
    // Não adicionar Content-Type para uploads
    return !request.url.includes('upload') &&
      request.method !== 'GET' &&
      request.method !== 'DELETE';
  }
}
