import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(value:boolean){
    if(!value){
      this.vwC.createEmbeddedView(this.temRef);
    }
    else{
      this.vwC.clear();
    }
  }
  constructor(private vwC:ViewContainerRef,private temRef:TemplateRef<any>) { }

}
