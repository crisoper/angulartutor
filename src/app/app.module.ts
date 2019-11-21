import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AleatorioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
