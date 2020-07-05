import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopModule } from './top/top.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./top/top.module').then((m) => m.TopModule),
  },

  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },

  {
    path: 'rogin',
    loadChildren: () =>
      import('./rogin/rogin.module').then((m) => m.RoginModule),
  },

  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },

  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'regi-vege',
    loadChildren: () =>
      import('./regi-vege/regi-vege.module').then((m) => m.RegiVegeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
