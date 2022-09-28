import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Evento } from '../interface/evento.interface';
import { EventsService } from '../services/events.service';

@Injectable({
  providedIn: 'root'
})
export class EventoResolver implements Resolve<Evento[]> {

  constructor(private evento:EventsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Evento[]{ //Observable<Evento[]>|
    return this.evento.getEvents();
  }
}
