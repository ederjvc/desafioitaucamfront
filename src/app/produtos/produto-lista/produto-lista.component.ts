import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produtos: Produto[] = [];
  produtoSelecionado: Produto;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ProdutosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getProdutos()
      .subscribe(resposta => this.produtos = resposta);
    ;
  }

  novoCadastro(){
    this.router.navigate(['/produtos/form'])
  }

  preparaDelecao(produto: Produto){
    this.produtoSelecionado = produto;
  }

}
