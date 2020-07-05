import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegiVegeComponent } from './regi-vege/regi-vege.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RegiVegeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiVegeRoutingModule {}
