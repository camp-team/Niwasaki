import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoginComponent } from './rogin/rogin.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoginRoutingModule {}
