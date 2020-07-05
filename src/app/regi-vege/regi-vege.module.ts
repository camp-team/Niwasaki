import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegiVegeRoutingModule } from './regi-vege-routing.module';
import { RegiVegeComponent } from './regi-vege/regi-vege.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RegiVegeComponent],
  imports: [
    CommonModule,
    RegiVegeRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
})
export class RegiVegeModule {}
