import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerectComponent } from './serect/serect.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SerectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerectRoutingModule {}
