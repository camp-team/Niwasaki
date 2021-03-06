import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top/top.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, TopRoutingModule, MatChipsModule, MatButtonModule],
})
export class TopModule {}
