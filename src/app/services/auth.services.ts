import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // estado reactivo simple
  private _logged = signal<boolean>(false);
  isLoggedIn = this._logged.asReadonly();

  login(user: string, pass: string): boolean {
    const ok = user === 'admin' && pass === '1234';
    this._logged.set(ok);
    return ok;
  }

  logout() {
    this._logged.set(false);
  }
}