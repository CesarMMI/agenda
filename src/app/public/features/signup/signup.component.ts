import { Component, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from 'src/app/shared/components/form.component';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent extends FormComponent {
  private _router = inject(Router);

  constructor() {
    super();
  }

  override buildForm(): void {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  override submit() {
    this._authService
      .signup({ ...this.form.value })
      .subscribe((_) => {
        this._router.navigateByUrl('/private')
        console.log('inferno')
      });
  }
}
