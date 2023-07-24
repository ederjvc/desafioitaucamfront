import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';
import { SaidasFormComponent } from './saidas-form/saidas-form.component';
import { SaidaListaComponent } from './saida-lista/saida-lista.component';


const routes: Routes = [
  { path: 'saidas', component: LayoutComponent, canActivate: [AuthGuard] , children: [
    { path: 'form' , component: SaidasFormComponent }, 
    { path: 'lista', component: SaidaListaComponent },   
    { path: '',redirectTo : '/saidas/lista', pathMatch: 'full'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaidasRoutingModule { }
