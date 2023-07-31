import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, first, map, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ILoginRequest, ILoginResponse } from '../json/auth/login';
import { ISignupRequest, ISignupResponse } from '../json/auth/signup';
import { IUsuario } from '../models/usuario';
import { IToken } from '../models/token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);
  private _baseUrl = `${environment.apiUrl}Sessions/`;

  private _usuario$ = new BehaviorSubject<IUsuario | null>(this.getStorage('user'));
  public readonly usuario$ = this._usuario$.asObservable();

  private send(endpoint: 'login' | 'register', body: any) {
    var headers_object = new HttpHeaders()
      .append("Authorization", "Basic " + btoa(`${body.email}:${body.passwordConfirm}`));

    const httpOptions = {
      headers: headers_object
    };

    return this._http
      .post<ILoginResponse>(`${this._baseUrl}${endpoint}`, {}, httpOptions)
      .pipe(
        first(),
        tap(_ => this.setStorage<IToken>('token', { ..._.data })),
        tap(_ => this.setStorage<IUsuario>('user', _.data.usuario))
      )
      ;
  }

  public login(body: ILoginRequest) {
    return this.send('login', body)
  }

  public signup(body: ISignupRequest) {
    return this.send('register', body)
  }

  public logout() {
    this.setStorage('user', null);
  }

  private setStorage<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  private getStorage<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (!item) return null;
    return JSON.parse(item) as T;
  }

}
