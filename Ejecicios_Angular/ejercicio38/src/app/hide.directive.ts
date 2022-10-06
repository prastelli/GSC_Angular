import { Directive, HostListener, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective {

  constructor(private el: ElementRef) { }


  // no entendi la parte del metodo init
  OnInit(){
  }

  @HostListener('mouseleave') mouseLeave() {
    this.el.nativeElement.style.visibility = "visible"
  }


  @HostListener('mouseover') onmouseover() {
    this.el.nativeElement.style.visibility = "hidden"
  }

}
