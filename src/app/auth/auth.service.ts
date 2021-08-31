import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  data: any = {
    name: '',
  };

  constructor(private router: Router) { }

  login(email: string, password: string): void {
    this.storeToken(email);
    this.data.name = email;
    this.data.password = password;
    this.router.navigate(['/']);
  }

  register(email: string, password: string, firstname: string, lastname: string): void {
    this.storeToken(email);
    this.data.name = email;
    this.data.firstname = firstname;
    this.data.lastname = lastname;
    this.data.password = password;
    this.router.navigate(['/']);
  }

  logout(): void {
    this.destroyToken();
    this.data.name = '';
    this.router.navigate(['/auth']);
  }

  getData(): string {
    this.data.name = this.getToken() || '';
    return this.data;
  }

  isAuth(): boolean {
    if (localStorage.getItem('auth_token')) {
      return true;
    }
    return false;
  }

  private storeToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  private destroyToken(): void {
    localStorage.removeItem('auth_token');
  }

  private getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}
