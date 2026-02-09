import { Injectable } from '@angular/core';


 // AuthService handles authentication logic.
  //This is a fake auth system for learning purposes.

@Injectable({ // marks class as avaible for DI and registers it to angular root injector
  providedIn: 'root' //Creates one instance for entire application 
})
export class AuthService {

  private loggedIn = false; // stores authentication status,encapsulation,Enforces controlled access through methods

  login(email: string, password: string): boolean { // ensures single shared logic(singleton)
    if (email && password) {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void { // clears authentication state
    this.loggedIn = false;
  }

  isAuthenticated(): boolean { // checks user logged in or not
    return this.loggedIn;
  }
}
