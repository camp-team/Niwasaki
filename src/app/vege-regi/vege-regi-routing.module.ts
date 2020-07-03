import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VegeRegiComponent } from './vege-regi/vege-regi.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VegeRegiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VegeRegiRoutingModule {}
