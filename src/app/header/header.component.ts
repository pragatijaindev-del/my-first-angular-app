// this component  is responsible for  user session termination and navigation
// delegates authentication logic to AuthService
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor( // DI, injects required dependency in the component
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void { // clears user session via service navigates to login
    this.authService.logout();
    this.router.navigate(['/login']); //redirect user to login page
  }
}
