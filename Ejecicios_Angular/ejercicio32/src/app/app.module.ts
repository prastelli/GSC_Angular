import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
