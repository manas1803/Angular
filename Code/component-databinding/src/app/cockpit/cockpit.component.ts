import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();;
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput',{static:true}) serverContent:ElementRef;
  constructor() { }

  ngOnInit() {
  }
   onAddServer(nameInput:HTMLInputElement) {
     this.serverCreated.emit({serverName:nameInput.value,serverContent:this.serverContent.nativeElement.value})
  }
  
  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({serverName:nameInput.value,serverContent:this.serverContent.nativeElement.value})
   }
}
