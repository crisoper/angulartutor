import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {


  @Input() datos;
  
  constructor() { }

  ngOnInit() {
  }

}
