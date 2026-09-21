import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page').then((m) => m.HomePage),
    title: 'TrailSoft | Desarrollo de software a medida'
  },
  { path: '**', redirectTo: '' }
];
