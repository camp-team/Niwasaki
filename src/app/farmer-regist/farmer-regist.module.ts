import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRegistRoutingModule } from './farmer-regist-routing.module';
import { FarmerRegistComponent } from './farmer-regist/farmer-regist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxYubinBangoModule } from 'ngx-yubinbango';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [FarmerRegistComponent],
  imports: [
    CommonModule,
    FarmerRegistRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxYubinBangoModule,
    MatSelectModule
  ]
})
export class FarmerRegistModule { }
