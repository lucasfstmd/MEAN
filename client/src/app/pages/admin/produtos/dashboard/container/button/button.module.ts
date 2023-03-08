import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../../../../shared/shared.module";
import { ButtonComponent } from "./button.component";



@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ButtonModule { }
