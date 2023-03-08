import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ToolbarInicialComponent } from './toolbar-inicial/toolbar-inicial.component';
import { CardInicialComponent } from './card-inicial/card-inicial.component';
import { CardPrincipalComponent } from './card-principal/card-principal.component';
import { SharedModule } from '../../../shared/shared.module';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    HomeComponent,
    ToolbarInicialComponent,
    CardInicialComponent,
    CardPrincipalComponent,
    FooterComponent,
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
