import { Component, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from 'src/app/shared/components/form.component';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends FormComponent {
  constructor(
    private _router: Router
  ) {
    super();
  }

  override buildForm(): void {
    this.form = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  override submit() {
    this._authService
      .login({
        ...this.form.value,
        passwordConfirm: this.form.value.password,
      })
      .subscribe({
        next: () => {
          this._router.navigate(['private/home']);
        }, 
        error: (e) => {
          console.log(e.error.error)
        }
      });
  }
}

// 