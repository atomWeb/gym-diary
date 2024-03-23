import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { authGuard } from './login/auth.guard';
import { diaryResolver, entryResolver } from './diary/diary.resolver';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./diary/diary/diary.component'),
    title: 'Diary',
    resolve: { exerciseList: diaryResolver },
    canActivate: [authGuard],
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
    resolve: { entry: entryResolver },
    title: 'Edit Entry',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component'),
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];
