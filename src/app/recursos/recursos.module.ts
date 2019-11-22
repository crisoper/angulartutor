import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonComponent } from './json/json.component';



@NgModule({
  declarations: [JsonComponent],
  imports: [
    CommonModule
  ],

  //Exportaomos JsonComponent
  exports: [JsonComponent],
})
export class RecursosModule { }
