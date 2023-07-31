import { OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { BaseComponent } from './base.component';

export abstract class FormComponent extends BaseComponent implements OnInit {
  protected _formBuilder = inject(FormBuilder);
  protected _authService = inject(AuthService);

  protected form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  protected abstract buildForm(): void;
  protected abstract submit(): void;
}
