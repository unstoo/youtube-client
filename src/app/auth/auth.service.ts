import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable  } from 'rxjs';

import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  private user: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);


  private auth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    const result = this.getToken();
    if (result) {
      this.auth.next(true);
      this.user.next({ name: result });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(email: string, password: string): void {
    this.storeToken(email);
    // Auth Server
    this.user.next({
      name: email,
    });
    this.auth.next(true);
    this.router.navigate(['/video']);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register(email: string, password: string, firstname: string, lastname: string): void {
    this.storeToken(email);
    this.user.next({
      name: email,
    });
    this.auth.next(true);
    this.router.navigate(['/video']);
  }

  logout(): void {
    this.destroyToken();
    this.user.next(undefined);
    this.auth.next(false);
    this.router.navigate(['/auth']);
  }

  getData(): Observable<User | undefined> {
    return this.user.asObservable();
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
