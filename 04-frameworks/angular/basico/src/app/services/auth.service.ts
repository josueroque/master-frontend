import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(user: { username: string; password: string }): boolean {
    console.log({ user });
    if (
      user.username === 'master@lemoncode.net' &&
      user.password === '12345678'
    )
      return true;

    return false;
  }

  logout(): void {
    localStorage.removeItem('userName');
  }

  isLogged(): boolean {
    const logged = localStorage.getItem('userName');
    if (logged) return true;
    return false;
  }

  getUsername(): string {
    return '';
  }
}
