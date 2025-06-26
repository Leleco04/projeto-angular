import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loggedIn = new BehaviorSubject<boolean>(!!sessionStorage.getItem('fake_token'));
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) { }

  login(user: string, pass: string): boolean {
    if (user === 'angular' && pass === 'angular') {
      sessionStorage.setItem('fake_token', 'token_123');
      this.loggedIn.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem('fake_token');
    this.loggedIn.next(false);
    this.router.navigate(['/home']);
  }
}
