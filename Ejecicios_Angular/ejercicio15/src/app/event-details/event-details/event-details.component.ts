import { Component, OnInit } from '@angular/core';
import { Evento } from '../../interface/evento.interface';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event?:Evento = {id:0,name:'',date:'',time:'',location:{address:'',city:'',country:''}};
  reviewed: boolean = false;

  constructor(private evento: EventsService, private parametro:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.event = this.evento.getEvent(+this.parametro.snapshot.params['id']);
  }

  returnToEvents(){
      this.router.navigate(['/'])
  }
  onChange(){
    this.reviewed = !this.reviewed
  }
}
