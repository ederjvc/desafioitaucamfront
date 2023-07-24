import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { EntradasRoutingModule } from './entradas-routing.module';
import { EntradasFormComponent } from './entradas-form/entradas-form.component';
import { EntradaListaComponent } from './entrada-lista/entrada-lista.component';


@NgModule({
  declarations: [EntradasFormComponent, EntradaListaComponent],
  imports: [
    CommonModule,
    EntradasRoutingModule,
    FormsModule
  ], exports:[
    EntradasFormComponent,
    EntradaListaComponent
  ]
})
export class EntradasModule { }
