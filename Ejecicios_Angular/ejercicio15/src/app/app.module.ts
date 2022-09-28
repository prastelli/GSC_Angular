import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsService } from './services/events.service';
import { EventDetailsComponent } from './event-details/event-details/event-details.component';
import { AccesoGuard } from './guards/acceso.guard';
import { EventoResolver } from './resolver/evento.resolver';


const routes: Routes = [
{path: '', component: EventsListComponent, resolve:{resolver: EventoResolver}},
{path: 'eventdetails/:id',
 component: EventDetailsComponent,
 canActivate:[AccesoGuard],
 canDeactivate:[AccesoGuard]
},
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
  providers: [EventsService,EventoResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
