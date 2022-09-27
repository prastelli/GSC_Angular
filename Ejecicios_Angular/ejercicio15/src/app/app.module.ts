import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsService } from './services/events.service';
import { EventDetailsComponent } from './event-details/event-details/event-details.component';

const routes: Routes = [
{ path: '', component: EventsListComponent },
{path: 'eventdetails/:id', component: EventDetailsComponent},
{ path: '**', redirectTo: 'EventsListComponent' },
];



@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
