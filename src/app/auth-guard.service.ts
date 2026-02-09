import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service.service';

// acts as a gurad runs before protected route is activated and checks whether user is authenticated or not 
export const authGuard: CanActivateFn = () => {
// this inject() method provides DI of any api or any servicez
  const authService = inject(AuthService); 
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }
  

  router.navigate(['/login']);
  return false;
};
