import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/client/home/home.component';
import { ProdutosDetailComponent } from './pages/client/produtos.detail/produtos.detail.component';
import { DashboardComponent } from './pages/admin/produtos/dashboard/dashboard.component';
import { ProdutosComponent } from './pages/admin/produtos/produtos.component';
import { CadastrarComponent } from './pages/admin/produtos/cadastrar/cadastrar.component';
import { EditarComponent } from './pages/admin/produtos/editar/editar.component';
import { UsuariosComponent } from './pages/admin/usuarios/usuarios.component';
import { CadastrarUsuarios } from './pages/admin/usuarios/cadastrar/cadastrar.component';
import { EditarUsuarios } from './pages/admin/usuarios/editar/editar.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'produtos/:idProduto', component: ProdutosDetailComponent, pathMatch:'full'},
  {path:'admin', component: DashboardComponent, pathMatch:'full'},
  {path:'admin/produtos', component: ProdutosComponent, pathMatch:'full'},
  {path:'admin/produtos/cadastrar', component: CadastrarComponent, pathMatch:'full'},
  {path:'admin/produtos/editar/:idProduto', component: EditarComponent, pathMatch:'full'},
  {path:'admin/usuarios', component: UsuariosComponent, pathMatch:'full'},
  {path:'admin/usuarios/cadastrar', component: CadastrarUsuarios, pathMatch:'full'},
  {path:'admin/usuarios/editar/:idUsuarios', component: EditarUsuarios, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
