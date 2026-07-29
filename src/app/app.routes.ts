import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    {
        path: 'estante',
        loadComponent: () => import('./pages/estante/estante').then(m => m.Estante),
    },
    {
        path: 'termos',
        loadComponent: () => import('./pages/termos/termos').then(m => m.Termos),
    },
    {
        path: 'privacidade',
        loadComponent: () => import('./pages/privacidade/privacidade').then(m => m.Privacidade),
    },
];