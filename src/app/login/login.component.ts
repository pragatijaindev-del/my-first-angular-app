import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('LoginComponent loaded');
  }

  login(): void {

    if (this.email && this.password) {
      this.message = 'Login successful';
      this.messageType = 'success';

      // redirect after small delay so user sees message
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1000);

    } else {
      this.message = 'Login failed. Please try again';
      this.messageType = 'error';
    }

    this.email = '';
    this.password = '';
  }
}
