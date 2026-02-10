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

  // Temporary mock call structure , will integrate backend  tomorrow)
  //Subscribes to the HTTP Observable returned by HttpClient
  this.authService.login(this.email, this.password).subscribe({
    next: () => {
      this.message = 'Login successful';
      this.messageType = 'success';
    },
    error: () => {
      this.message = 'Login failed';
      this.messageType = 'error';
    }
  });

  this.email = '';
  this.password = '';
}

    
}