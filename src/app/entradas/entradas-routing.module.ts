import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';
import { EntradasFormComponent } from './entradas-form/entradas-form.component';
import { EntradaListaComponent } from './entrada-lista/entrada-lista.component';


const routes: Routes = [
  { path: 'entradas', component: LayoutComponent, canActivate: [AuthGuard] , children: [
    { path: 'form' , component: EntradasFormComponent },  
    { path: 'lista', component: EntradaListaComponent },  
    { path: '',redirectTo : '/entradas/lista', pathMatch: 'full'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradasRoutingModule { }
