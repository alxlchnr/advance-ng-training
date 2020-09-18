import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;

  constructor(private httpClient: HttpClient) { }

  login(userName: string, password: string): Observable<string> {
    return this.httpClient.post(
      '/api/login',
      { email: userName, password: password },
      {
        responseType: 'text',
        headers: {
          'Content-Type': 'application/json'
        }
      }).pipe(
        tap(token => this.token = token)
      )
  }
}
