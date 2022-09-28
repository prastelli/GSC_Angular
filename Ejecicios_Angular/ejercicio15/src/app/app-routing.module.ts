import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';

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
  declarations: [EventsListComponent,
    EventDetailsComponent],
  providers:[EventoResolver],
  imports: [
    CommonModule,RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
