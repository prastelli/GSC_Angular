import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() quantity: number = 0;
  squaredQuantity: number = 0;
  exponent: number = 2
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.squaredQuantity =  Math.pow(this.quantity,this.exponent);
  }

}
