import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent, CardComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
})
export class PublicModule {}
