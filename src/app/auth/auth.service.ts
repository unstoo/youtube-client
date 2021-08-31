import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private email: string = '';

  constructor() { }

  login(email: string, password: string): void {
    this.email = email;
    this.storeToken(email);
  }

  register(email: string, password: string, firstname: string, lastname: string): void {
    this.email = email;
    this.storeToken(email);
  }

  logout(): void {
    this.email = '';
    this.destroyToken();
  }

  private storeToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  private destroyToken(): void {
    localStorage.removeItem('auth_token');
  }
}
