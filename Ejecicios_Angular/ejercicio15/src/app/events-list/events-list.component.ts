import { Component, OnInit } from '@angular/core';
import { Evento } from '../interface/evento.interface';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Evento[] = []

  constructor(private evento: EventsService) { }

  ngOnInit() {
    this.getEvents()
  }

  getEvents(){
    this.events = this.evento.getEvents()
  }

}
