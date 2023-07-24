import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../produtos.service';
import { EntradaProdutoBusca } from './entradaProdutoBusca';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada-lista',
  templateUrl: './entrada-lista.component.html',
  styleUrls: ['./entrada-lista.component.css']
})
export class EntradaListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  message: string;
  lista: EntradaProdutoBusca[];

  constructor(
    private service: ProdutosService,
    private router: Router
  ) { 
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12]
  }

  ngOnInit(): void {
  }

  novoCadastro(){
    this.router.navigate(['/entradas/form'])
  }

  consultar(){
    this.service.buscarE(this.nome, this.mes ? this.mes.toString() : '')
      .subscribe(response =>{
         this.lista = response;
        if( this.lista.length <= 0 ){
          this.message = "Nenhum Registro encontrdo.";
        } else {
          this.message=null;
        }
       });
  }

  

}
