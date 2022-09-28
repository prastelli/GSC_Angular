import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventsService } from './services/events.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AppRoutingModule],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
