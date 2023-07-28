import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule ,  //<-如果有form表單的話需要 imports FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
