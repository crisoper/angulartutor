import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { BindingComponent } from './binding/binding.component';

import { ElementosModule } from './elementos/elementos.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AleatorioComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,

    ElementosModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
