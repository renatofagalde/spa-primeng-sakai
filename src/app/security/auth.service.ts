import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://reqres.in/api';
  jwtPayload: any;
  email: string='';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.carregarToken();
  }

  login(email: string, password: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    const body = { email, password };

    return this.http.post<any>(`${this.apiUrl}/login`, body, { headers })
      .toPromise()
      .then(response => {
        // Reqres retorna um token simples
        this.armazenarToken(response.token, email);
      })
      .catch(response => {
        if (response.status === 400) {
          return Promise.reject('Usuário ou senha inválida!');
        }
        return Promise.reject(response);
      });
  }

  register(email: string, password: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    const body = { email, password };

    return this.http.post<any>(`${this.apiUrl}/register`, body, { headers })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.token, email);
      });
  }

  // Para simular renovação de token com Reqres
  obterNovoAccessToken(): Promise<void> {
    // Simula renovação - Reqres não tem refresh token real
    const currentToken = localStorage.getItem('token');

    if (currentToken) {
      return Promise.resolve();
    }

    return Promise.reject('Token inválido');
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.jwtPayload = null;
  }

  isAccessTokenInvalido(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      return true;
    }

    // Para Reqres, vamos simular expiração após 1 hora
    const tokenTime = localStorage.getItem('tokenTime');
    if (tokenTime) {
      const now = new Date().getTime();
      const tokenDate = parseInt(tokenTime);
      const oneHour = 60 * 60 * 1000; // 1 hora em ms

      return (now - tokenDate) > oneHour;
    }

    return false;
  }

  // Simulação de permissões para teste
  temPermissao(permissao: string): boolean {
    // Para desenvolvimento, sempre retorna true
    // Em produção, verificaria o JWT real
    return true;
  }

  temQualquerPermissao(roles: string[]): boolean {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !this.isAccessTokenInvalido();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private armazenarToken(token: string, email: string | null) {
    localStorage.setItem('token', token);
    localStorage.setItem('tokenTime', new Date().getTime().toString());

    if (email) {
      localStorage.setItem('email', email);
      this.email = email;
    }

    // Para Reqres, vamos simular um payload JWT
    this.jwtPayload = {
      sub: email,
      authorities: ['ROLE_USER', 'ROLE_ADMIN'], // Simular permissões
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // Expira em 1 hora
    };
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    if (token && !this.isAccessTokenInvalido()) {
      this.armazenarToken(token, email);
    }
  }
}
