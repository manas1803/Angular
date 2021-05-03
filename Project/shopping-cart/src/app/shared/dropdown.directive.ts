import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') eleClicked:boolean = false;
  constructor(private eleRef:ElementRef) { }
  @HostListener('document:click',['$event']) displayContent(event){
    if(this.eleRef.nativeElement.contains(event.target)){
      this.eleClicked=!this.eleClicked
    }
    else{
      this.eleClicked=false;
    }
  }
}
