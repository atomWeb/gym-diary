import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginForm, Token } from './interfaces/login-set';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private url = 'auth/login';
  // private url = 'http://localhost:3000/auth/login';
  #token?: Token;

  login(loginForm: Partial<LoginForm>): Observable<Token> {
    return this.httpClient
      .post<Token>(this.url, loginForm)
      .pipe(tap((token) => (this.#token = token)));
  }
  get isLogged() {
    return this.#token ? true : false;
  }
  logout() {
    this.#token = undefined;
  }
  get token() {
    return this.#token?.access_token;
  }
}
