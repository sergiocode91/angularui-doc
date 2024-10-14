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
      {
        path: 'installation',
        loadComponent: () =>
          import(
            './presentation/pages/installation/installation.component'
          ).then((m) => m.InstallationComponent),
      },
      {
        path: 'upgrade-guide',
        loadComponent: () =>
          import(
            './presentation/pages/upgrade-guide/upgrade-guide.component'
          ).then((m) => m.UpgradeGuideComponent),
      },
      {
        path: 'alert',
        loadComponent: () =>
          import('./presentation/pages/alert/alert.component').then(
            (m) => m.AlertComponent
          ),
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import('./presentation/pages/avatar/avatar.component').then(
            (m) => m.AvatarComponent
          ),
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./presentation/pages/badge/badge.component').then(
            (m) => m.BadgeComponent
          ),
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import(
            './presentation/pages/breadcrumb/breadcrumb.component'
          ).then((m) => m.BreadcrumbComponent),
      },
      {
        path: 'button',
        loadComponent: () =>
          import('./presentation/pages/button/button.component').then(
            (m) => m.ButtonComponent
          ),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./presentation/pages/card/card.component').then(
            (m) => m.CardComponent
          ),
      },
      {
        path: 'dialog',
        loadComponent: () =>
          import('./presentation/pages/dialog/dialog.component').then(
            (m) => m.DialogComponent
          ),
      },
      {
        path: 'input',
        loadComponent: () =>
          import('./presentation/pages/input/input.component').then(
            (m) => m.InputComponent
          ),
      },
      {
        path: 'label',
        loadComponent: () =>
          import('./presentation/pages/label/label.component').then(
            (m) => m.LabelComponent
          ),
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./presentation/pages/progress/progress.component').then(
            (m) => m.ProgressComponent
          ),
      },
      {
        path: 'select',
        loadComponent: () =>
          import('./presentation/pages/select/select.component').then(
            (m) => m.SelectComponent
          ),
      },
      {
        path: 'skeleton',
        loadComponent: () =>
          import('./presentation/pages/skeleton/skeleton.component').then(
            (m) => m.SkeletonComponent
          ),
      },
      {
        path: 'spinner',
        loadComponent: () =>
          import('./presentation/pages/spinner/spinner.component').then(
            (m) => m.SpinnerComponent
          ),
      },
      {
        path: 'switch',
        loadComponent: () =>
          import('./presentation/pages/switch/switch.component').then(
            (m) => m.SwitchComponent
          ),
      },
      {
        path: 'table',
        loadComponent: () =>
          import('./presentation/pages/table/table.component').then(
            (m) => m.TableComponent
          ),
      },
      {
        path: 'textarea',
        loadComponent: () =>
          import('./presentation/pages/textarea/textarea.component').then(
            (m) => m.TextareaComponent
          ),
      },
      {
        path: 'tooltip',
        loadComponent: () =>
          import('./presentation/pages/tooltip/tooltip.component').then(
            (m) => m.TooltipComponent
          ),
      },
        
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
