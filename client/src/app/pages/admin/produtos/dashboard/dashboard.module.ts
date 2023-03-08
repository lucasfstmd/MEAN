import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../../../../shared/shared.module";
import { ToolbarComponent } from './toolbar/toolbar.component';
import {ContainerModule} from "./container/container.module";

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContainerModule
  ]
})
export class DashboardModule {

}
