import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable  } from 'rxjs';

import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  data: User = {
    name: '',
  };

  private auth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    const result = this.getToken();
    if (result) {
      this.auth.next(true);
    }
  }

  login(email: string, password: string): void {
    this.storeToken(email);
    this.data.name = email;
    this.data.password = password;
    this.auth.next(true);
    this.router.navigate(['/video']);
  }

  register(email: string, password: string, firstname: string, lastname: string): void {
    this.storeToken(email);
    this.data.name = email;
    this.data.firstname = firstname;
    this.data.lastname = lastname;
    this.data.password = password;
    this.auth.next(true);
    this.router.navigate(['/video']);
  }

  logout(): void {
    this.destroyToken();
    this.data.name = '';
    this.auth.next(false);
    this.router.navigate(['/auth']);
  }

  getData(): User {
    this.data.name = this.getToken() || '';
    return this.data;
  }

  isAuth(): boolean {
    if (localStorage.getItem('auth_token')) {
      return true;
    }
    return false;
  }

  isAuthO(): Observable<boolean> {
    return this.auth.asObservable();
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
