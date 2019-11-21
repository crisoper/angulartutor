import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app3';

  articulos = [
  				{codigo:1, nombre:'Parlantes', precio:100.55, foto: "https://i.pravatar.cc/50"},
				{codigo:2, nombre:'Computadoras', precio:120.10, foto: "https://i.pravatar.cc/50"},
				{codigo:3, nombre:'Laptos', precio:52.30, foto: "https://i.pravatar.cc/50"},
				{codigo:4, nombre:'Monitores', precio:170, foto: "https://i.pravatar.cc/50"},
				{codigo:5, nombre:'Teclados', precio:200, foto: "https://i.pravatar.cc/50"},
             ];

}
