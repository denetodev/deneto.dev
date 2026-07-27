import { Routes } from '@angular/router';
import { Home } from './pages/home';

export const routes: Routes = [
    { path: '', component: Home },
    {
        path: 'estante',
        loadComponent: () => import('./pages/estante').then(m => m.Estante),
    },
];
