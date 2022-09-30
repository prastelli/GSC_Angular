import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  form = new FormGroup({
    eventname: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    location: new FormGroup({
      address: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
    })
  })

  event = {
    name: '',
    date: '',
    time: '',
    location: {
      address: '',
      city: '',
      country: ''
    }
  }

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.event.name = this.form.controls['eventname'].value;
    this.event.date = this.form.controls['date'].value;
    this.event.time = this.form.controls['time'].value;
    this.event.location = this.form.controls['location'].value;

    this.eventService.saveEvent(this.event);

    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
