import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SelectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRoutingModule {}
