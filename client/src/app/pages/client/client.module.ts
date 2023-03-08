import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { ProdutosDetailModule } from './produtos.detail/produtos.detail.module';



@NgModule({
  declarations: [],
  exports:[
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    ProdutosDetailModule
  ]
})
export class ClientModule { }
