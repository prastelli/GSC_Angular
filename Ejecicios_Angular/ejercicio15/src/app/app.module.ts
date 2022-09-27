import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsService } from './services/events.service';

const routes: Routes = [
{ path: '', component: EventsListComponent },
{ path: '**', redirectTo: 'EventsListComponent' },
];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
