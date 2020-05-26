import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoginRoutingModule } from './rogin-routing.module';
import { RoginComponent } from './rogin/rogin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [RoginComponent],
  imports: [
    CommonModule,
    RoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
})
export class RoginModule {}
