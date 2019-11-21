import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	foto: string;
	likes: number;

	@Input() valor: number;
	

  constructor() { }

  ngOnInit() {
  	this.foto = "https://i.pravatar.cc/250";
  	this.likes = Math.trunc( Math.random() * 1500 ) + 1;
  }

}
