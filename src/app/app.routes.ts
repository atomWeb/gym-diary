import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./diary/diary/diary.component'),
  },
  {
    path: 'new-reactive',
    loadComponent: () =>
      import(
        './diary/new-entry-form-reactive/new-entry-form-reactive.component'
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
