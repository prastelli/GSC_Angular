import { Component, OnInit } from '@angular/core';
import { map }  from  'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  subject;
  output: string[] = [];

  constructor() {
    this.subject = new Subject<string>();
  }

  ngOnInit(): void {
    this.subject.pipe(map(key => key.toUpperCase())).subscribe(key => {this.output.push(key)});
  }

  keypress(e: any): void {
    this.subject.next(e.key);
  }

}

