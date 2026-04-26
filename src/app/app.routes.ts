import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'tela2',
    loadComponent: () => import('./tela2/tela2.page').then((m) => m.Tela2Page),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];