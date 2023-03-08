import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosComponent } from './produtos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditarComponent } from './editar/editar.component';
import { DashboardModule } from "./dashboard/dashboard.module";
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [
    ProdutosComponent,
    CadastrarComponent,
    EditarComponent
  ],
  exports: [
    ProdutosComponent,
    CadastrarComponent,
    DashboardComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    DashboardModule,
    SharedModule
  ]
})
export class ProdutosModule { }
