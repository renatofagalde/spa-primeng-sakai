import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
  private apiUrl = 'https://reqres.in/api';

  private httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': 'reqres-free-v1'
    })
  };
  constructor(private http: HttpClient) { }

  getUsers(page: number = 1): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(
      `${this.apiUrl}/users?page=${page}`,
      this.httpOptions
    );
  }

  getUser(id: number): Observable<{data: User}> {
    return this.http.get<{data: User}>(
      `${this.apiUrl}/users/${id}`,
      this.httpOptions
    );
  }
}
