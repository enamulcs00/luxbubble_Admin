import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthguardGuard } from './services/authguard.guard';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { 
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule),
        canActivate:[AuthguardGuard]
      },
      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule),
        canActivate:[AuthguardGuard]
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule),
        canActivate:[AuthguardGuard]
      },
      { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule),canActivate:[AuthguardGuard] },
      { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule),canActivate:[AuthguardGuard] },
      { path: 'forms', loadChildren: () => import('./form/forms.module').then(m => m.FormModule),canActivate:[AuthguardGuard] },
      { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),canActivate:[AuthguardGuard] },
      { path: 'tables', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule),canActivate:[AuthguardGuard] },
      { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule),canActivate:[AuthguardGuard] },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule),
        canActivate:[AuthguardGuard]
      },
      { path: 'ecom', loadChildren: () => import('./ecommerce/ecom.module').then(m => m.EcomModule),canActivate:[AuthguardGuard] },
      {
        path: 'timeline',
        loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule),
        canActivate:[AuthguardGuard]
      },
      {
        path: 'extra-component',
        loadChildren:
          () => import('./extra-component/extra-component.module').then(m => m.ExtraComponentModule),
          canActivate:[AuthguardGuard]
      },
      { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),canActivate:[AuthguardGuard] },
      {
        path: 'apps/email',
        loadChildren: () => import('./apps/email/mail.module').then(m => m.MailModule),canActivate:[AuthguardGuard]
      },
      { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule),canActivate:[AuthguardGuard] },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        canActivate:[AuthguardGuard]
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];

