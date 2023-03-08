import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from "./container.component";
import { SharedModule } from "../../../../../shared/shared.module";
import { ButtonModule } from "./button/button.module";
import { DashboardModuleComponent } from "./dashboard/dashboard.module";
import { OrderModule } from "./order/order.module";
import {CustomersModule} from "./customers/customers.module";
import {ReportsModule} from "./reports/reports.module";
import {IntegrationsModule} from "./integrations/integrations.module";



@NgModule({
  declarations: [
    ContainerComponent
  ],
  exports: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule,
    DashboardModuleComponent,
    OrderModule,
    CustomersModule,
    ReportsModule,
    IntegrationsModule
  ]
})
export class ContainerModule { }
