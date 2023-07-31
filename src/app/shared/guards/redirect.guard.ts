import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

export const redirectGuard: CanActivateFn = (route, segments) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const path = route.routeConfig?.path;
  return authService.usuario$.pipe(
    map((_) => {
      switch (path) {
        case 'private':
          if (_) return true;
          router.navigate(['/public']);
          return false;

        case 'public':
          if (!_) return true;
          router.navigate(['/private']);
          return false;

        default:
          return false;
      }
    })
  );
};
