import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailsComponent } from '../event-details/event-details/event-details.component';
import { EventsService } from '../services/events.service';

@Injectable({
  providedIn: 'root'
})
export class AccesoGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(private evento:EventsService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     if (!route.params['id']){
      return false
     }

    return this.evento.getEvent(+route.params['id']) ? true : false
  }
  canDeactivate(
    component: EventDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.reviewed;
  }

}
