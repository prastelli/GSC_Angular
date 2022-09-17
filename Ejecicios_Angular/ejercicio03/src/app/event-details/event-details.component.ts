import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {

@Input() address: string = '' ;
@Input() city: string= '';
@Input()country: string = '';

}
