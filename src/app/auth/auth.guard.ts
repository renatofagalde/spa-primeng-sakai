import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Simular autenticação para desenvolvimento
  const isLoggedIn = localStorage.getItem('token') !== null;

  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
