import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormBuilder,Validators,FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  form = this.fb.group({
    name: ['',Validators.required],
    date: ['',Validators.required],
    time: ['',Validators.required],
    location: this.fb.group({
      address: ['',Validators.required],
      city: ['',Validators.required],
      country: ['',[Validators.required,Validators.pattern(".*[A-Z].*[A-Z].*")]],
    })
  })


  constructor(private eventService: EventService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    this.eventService.saveEvent(this.form.value);
    this.router.navigate(['/events']);
    this.form.errors
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
