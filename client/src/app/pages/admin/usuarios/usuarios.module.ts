import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { CadastrarUsuarios } from './cadastrar/cadastrar.component';
import { EditarUsuarios } from './editar/editar.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    CadastrarUsuarios,
    EditarUsuarios
  ],
  exports: [
    UsuariosComponent,
    CadastrarUsuarios,
    EditarUsuarios
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
