import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { BaseComponent } from './shared/components/base.component';
import { redirectGuard } from './shared/guards/redirect.guard';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
