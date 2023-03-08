import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationsComponent } from './integrations.component';



@NgModule({
  declarations: [
    IntegrationsComponent
  ],
  exports: [
    IntegrationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IntegrationsModule { }
