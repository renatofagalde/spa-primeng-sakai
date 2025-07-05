import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { LikwiHttp } from './likwi-http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private http: LikwiHttp,
    private auth: AuthService
  ) {}

  logout(): Promise<void> {
    // Reqres.in não tem endpoint de logout real
    // Apenas limpamos o token local
    return new Promise((resolve) => {
      this.auth.limparAccessToken();
      resolve();
    });
  }
}
