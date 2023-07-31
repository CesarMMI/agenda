import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectGuard } from './shared/guards/redirect.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
    canActivate: [redirectGuard],
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
    canActivate: [redirectGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
