import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { Produto } from './produtos/produto';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { EntradaProdutoBusca } from './entradas/entrada-lista/entradaProdutoBusca';
import { SaidaProdutoBusca } from './saidas/saida-lista/saidaProdutoBusca';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  apiURL: string = environment.apiURLBase+'/api/produtos';
  apiURLE: string = environment.apiURLBase+'/api/entradas';
  apiURLS: string = environment.apiURLBase+'/api/saidas';

  constructor( private http: HttpClient ) { }

  salvar( produto: Produto) : Observable<Produto> {
    return this.http.post<Produto>(`${this.apiURL}`, produto )
  }

  getProdutos() :Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiURL);
  }

  atualizar( produto: Produto) : Observable<any> {
    return this.http.put<Produto>(`${this.apiURL}/${produto.id}`,produto)
  }

  getProdutoById(id:number) : Observable<Produto> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  buscarE(nome: string, mes:string) : Observable<EntradaProdutoBusca[]>{

    const httpParams = new HttpParams()
          .set("nome", nome)
          .set("mes",mes);

    const url = this.apiURLE + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

  buscarS(nome: string, mes:string) : Observable<SaidaProdutoBusca[]>{

    const httpParams = new HttpParams()
          .set("nome", nome)
          .set("mes",mes);

    const url = this.apiURLS + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }

}
