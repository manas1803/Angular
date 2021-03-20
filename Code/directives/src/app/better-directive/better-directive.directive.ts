import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  constructor(private elementRef:ElementRef,private render:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor:string;
  ngOnInit(){
    // this.render.setStyle(this.elementRef.nativeElement,'background-color','lightblue')
    this.backgroundColor=this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.render.setStyle(this.elementRef.nativeElement,'background-color','lightblue')
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.render.setStyle(this.elementRef.nativeElement,'background-color','transparent')
    this.backgroundColor=this.defaultColor;
  }


}
