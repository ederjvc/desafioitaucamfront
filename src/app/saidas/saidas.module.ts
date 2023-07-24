import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { SaidasRoutingModule } from './saidas-routing.module';
import { SaidasFormComponent } from './saidas-form/saidas-form.component';
import { SaidaListaComponent } from './saida-lista/saida-lista.component';


@NgModule({
  declarations: [
      SaidasFormComponent,
      SaidaListaComponent
  ], imports: [
      CommonModule,
      SaidasRoutingModule,
      FormsModule
  ], exports:[
      SaidasFormComponent,
      SaidaListaComponent
  ]
})
export class SaidasModule { }
