import { Routes } from '@angular/router';
import {TabsComponent} from "./tabs/tabs.component";

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'throw',
        loadComponent: () => import('./throw-page/throw-page.component').then( m => m.ThrowPageComponent)
      },
      {
        path: 'scores',
        loadComponent: () => import('./scores-page/scores-page.component').then(m => m.ScoresPageComponent)
      },
      {
        path: 'user',
        loadComponent: () => import('./user-page/user-page.component').then( m => m.UserPageComponent)
      },
      {
        path: '',
        redirectTo: 'scores',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/scores',
    pathMatch: 'full',
  },
];
