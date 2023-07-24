import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saida-lista',
  templateUrl: './saida-lista.component.html',
  styleUrls: ['./saida-lista.component.css']
})
export class SaidaListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  message: string;

  constructor() { 
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12]
  }


  ngOnInit(): void {
  }

}
