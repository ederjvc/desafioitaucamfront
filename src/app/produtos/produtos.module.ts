import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';


@NgModule({
  declarations: [
    ProdutosFormComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ], exports:[
    ProdutosFormComponent,
    ProdutoListaComponent
  ]
})
export class ProdutosModule { }
