import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerectRoutingModule } from './serect-routing.module';
import { SerectComponent } from './serect/serect.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SerectComponent],
  imports: [CommonModule, SerectRoutingModule, MatButtonModule],
})
export class SerectModule {}
