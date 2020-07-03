import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegeRegiRoutingModule } from './vege-regi-routing.module';
import { VegeRegiComponent } from './vege-regi/vege-regi.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [VegeRegiComponent],
  imports: [
    CommonModule,
    VegeRegiRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
})
export class VegeRegiModule {}
