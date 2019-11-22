import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  @Input() numero: number;

  constructor() { }

  ngOnInit() {
  }

  generarAleatorio(){
  	this.numero = Math.trunc( Math.random() * 1200 ) + 1;
  }

}
