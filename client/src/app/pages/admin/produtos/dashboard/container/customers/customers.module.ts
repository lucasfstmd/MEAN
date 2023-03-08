import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  exports: [
    CustomersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
