import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./diary/diary/diary.component'),
  },
  {
    path: 'entry',
    loadComponent: () =>
      import(
        './diary/new-entry-form-reactive/new-entry-form-reactive.component'
      ),
  },
  {
    path: 'entry/:id',
    loadComponent: () =>
      import(
        './diary/new-entry-form-reactive/new-entry-form-reactive.component'
      ),
    title: 'Edit Entry',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];
