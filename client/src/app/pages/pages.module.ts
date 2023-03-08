import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [],
  exports: [
    AdminModule,
    ClientModule
  ],
  imports: [
    CommonModule,
    AdminModule,
    ClientModule,
    SharedModule
  ]
})
export class PagesModule { }
