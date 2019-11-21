import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.css']
})
export class AleatorioComponent implements OnInit {
  
  actual: number;


  constructor() { }

  ngOnInit() {
  	this.aleatorio(20);
  }

  aleatorio( numero ) {
    this.actual =  Math.trunc( Math.random() * numero ) + 1;
  }

  generarAleatorio(parametro:number) {
    this.aleatorio(parametro);
  }

}
