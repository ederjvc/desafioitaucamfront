import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { AuthGuard } from '../auth.guard'


const routes: Routes = [
  { path: 'produtos', component: LayoutComponent, canActivate: [AuthGuard] , children: [
    { path: 'form' , component: ProdutosFormComponent },
    { path: 'form/:id' , component: ProdutosFormComponent },
    { path: 'lista' , component: ProdutoListaComponent },
    { path: '',redirectTo : '/clientes/lista', pathMatch: 'full'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
