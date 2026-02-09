import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
// this components handles user authentication UI logic
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';
  message = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // event driven method
  login(): void {
// delegate authentication logic
    const success = this.authService.login(this.email, this.password);

    if (success) {
      this.message = 'Login successful';
      this.messageType = 'success';
      
// Allows success message to be visible before redirect
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 800);

    } else {
      this.message = 'Login failed';
      this.messageType = 'error';
    }

    this.email = '';
    this.password = '';
  }
}
