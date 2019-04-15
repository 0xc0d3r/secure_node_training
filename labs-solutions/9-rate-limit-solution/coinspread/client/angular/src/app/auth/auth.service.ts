import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { API_HOST } from './../app.constants';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }

  login(credentials): Observable<any> {
    return this.http.post(`${API_HOST}/access/signin`, credentials);
  }

  signup(credentials): Observable<any> {
    return this.http.post<any>(`${API_HOST}/access/signup`, credentials);
  }

  finishAuthentication(token): void {
    localStorage.setItem('access_token', token);
    if (this.isAdmin()) {
      this.router.navigate(['fees']);
    } else {
      this.router.navigate(['companion']);
    }
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired();
  }

  getToken(): string {
    return localStorage.getItem('access_token');
  }

  isAdmin(): boolean {
    return this.jwtHelper.decodeToken(this.getToken()).scope === 'admin';
  }

  getUseRole(): string {
    return this.jwtHelper.decodeToken(this.getToken()).scope;
  }
}
