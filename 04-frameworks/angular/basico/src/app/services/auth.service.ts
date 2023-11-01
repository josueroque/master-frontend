import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private userStorage = new Subject<string>();
  login(user: { username: string; password: string }): boolean {
    if (
      user.username === 'master@lemoncode.net' &&
      user.password === '12345678'
    ) {
      localStorage.setItem('userName', user.username);
      this.userStorage.next('added');
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('userName');
    this.userStorage.next('removed');
    console.log(this.isLogged());
  }

  isLogged(): Observable<any> {
    return this.userStorage.asObservable();
  }

  getUsername(): string | null {
    if (localStorage.getItem('userName'))
      return localStorage.getItem('userName');
    return null;
  }
}
