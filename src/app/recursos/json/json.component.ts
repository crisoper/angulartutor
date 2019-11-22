import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  // Atributo persnas del tipo privado
  private productos = null;

  // Agregamos un constructor a nuesta clase
  constructor(private http: HttpClient) { }

  ngOnInit() {
	this.http.get("http://scratchya.com.ar/vue/datos.php")
	      .subscribe(
	        result => {
	          this.productos = result;
	        },
	        error => {
	          console.log('Error al traer datos');
	        }
	      );
  }


  // cargarDatos() {
  // 	this.http.get("http://scratchya.com.ar/vue/datos.php")
  //     .subscribe(
  //       result => {
  //         this.productos = result;
  //       },
  //       error => {
  //         console.log('Error al traer datos');
  //       }
  //     );
  // }

}
