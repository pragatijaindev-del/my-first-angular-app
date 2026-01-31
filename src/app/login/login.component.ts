import { Component } from '@angular/core';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  login(): void {
    const data: LoginData = {
      email: this.email,
      password: this.password
    };

    console.log('Login Data Object:', data);
  }
}
