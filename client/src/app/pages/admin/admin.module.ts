import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import {ProdutosModule} from "./produtos/produtos.module";



@NgModule({
  declarations: [],
  exports: [
    UsuariosModule
  ],
  imports: [
    CommonModule,
    UsuariosModule,
    ProdutosModule
  ]
})
export class AdminModule { }
