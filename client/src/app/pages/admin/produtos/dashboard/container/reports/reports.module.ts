import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';



@NgModule({
  declarations: [
    ReportsComponent
  ],
  exports: [
    ReportsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReportsModule { }
