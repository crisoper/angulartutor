import { Component } from '@angular/core';

// Importamos HttpClient 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular tutor';

  // Atributo persnas del tipo privado
  private productos = null;

  // Agregamos un constructor a nuesta clase
  constructor(private http: HttpClient) { }
  // Inyectaos una propiedad en el constructor de la clase.


  ngOnInit() {
    // Recuperamos datos del servidor a traves del metodo get de la propiedad http
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






  // private articulos = null;

  articulos = [
        				{codigo:1, nombre:'Parlantes', precio:100.55, foto: "https://i.pravatar.cc/50"},
        				{codigo:2, nombre:'Computadoras', precio:120.10, foto: "https://i.pravatar.cc/50"},
        				{codigo:3, nombre:'Laptos', precio:52.30, foto: "https://i.pravatar.cc/50"},
        				{codigo:4, nombre:'Monitores', precio:170, foto: "https://i.pravatar.cc/50"},
        				{codigo:5, nombre:'Teclados', precio:200, foto: "https://i.pravatar.cc/50"},
             ];

}
