import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'landing-trailsoft',
    loadComponent: () =>
      import('./features/landing-trailsoft/landing-trailsoft-page').then(
        (m) => m.LandingTrailsoftPage
      ),
    title: 'TrailSoft | Soluciones digitales a medida'
  },
  {
    path: '',
    loadComponent: () => import('./features/home/home-page').then((m) => m.HomePage),
    title: 'TrailSoft | Desarrollo de software a medida'
  },
  { path: '**', redirectTo: '' }
];
