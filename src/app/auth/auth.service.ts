import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api';

  private httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  login(email: string, password: string): Promise<void> {
    const body = {email, password};

    return this.http.post<any>(`${this.apiUrl}/login`, body,this.httpOptions)
      .toPromise()
      .then(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user_email', email);
      });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user_email');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
