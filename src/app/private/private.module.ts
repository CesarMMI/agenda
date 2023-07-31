import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './features/home/home.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatButtonModule
  ]
})
export class PrivateModule { }
