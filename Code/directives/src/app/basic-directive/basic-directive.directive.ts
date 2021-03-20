import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicDirective]'
})
export class BasicDirectiveDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }
  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
  }

}
