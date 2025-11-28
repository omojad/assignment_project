import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { GlobalState } from './sidebar_menu/global-state/global-state';
import { Products } from './sidebar_menu/products/products';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../app/layout/home/home').then(m => m.Home), // create this next
      },
      {
        path: 'global-state',
        component: GlobalState // 👈 this route is triggered from sidebar
      },
      {
        path: 'products',
        component: Products // 👈 this route is triggered from sidebar
      }
    ]
  },
  
];