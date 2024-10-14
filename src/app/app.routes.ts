import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentation/pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./presentation/pages/docs.component').then(
        (m) => m.DocsComponent
      ),
    children: [
      { path: '', redirectTo: 'introduction', pathMatch: 'full' },
      {
        path: 'introduction',
        loadComponent: () =>
          import(
            './presentation/pages/introduction/introduction.component'
          ).then((m) => m.IntroductionComponent),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
