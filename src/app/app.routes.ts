import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { CalculatorPage } from './calculator/calculator.page';
import { ErrorPage } from './error/error.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'calculadora', component: CalculatorPage },
  { path: 'error', component: ErrorPage },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  {
    path: 'calculator',
    loadComponent: () => import('./calculator/calculator.page').then( m => m.CalculatorPage)
  }
];
