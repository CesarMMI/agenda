import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private _router = inject(Router);
  private _authService = inject(AuthService);

  protected user$ = this._authService.usuario$;

  public logout() {
    this._authService.logout();
    this._router.navigate(['/public']);
  }
}
