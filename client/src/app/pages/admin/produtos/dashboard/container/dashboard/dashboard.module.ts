import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GraficoComponent } from './grafico/grafico.component';
import { TableModule } from "./table/table.module";
import { SharedModule } from "../../../../../../shared/shared.module";



@NgModule({
  declarations: [
    DashboardComponent,
    GraficoComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableModule
  ]
})
export class DashboardModuleComponent { }
