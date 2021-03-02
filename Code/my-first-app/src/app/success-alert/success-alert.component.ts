import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  displayPara = true;
  logArray=[];
  count=1;
  constructor() { this.count=1;}

  onClickDisplay(event){
    this.displayPara = !this.displayPara;
    this.logArray.push(this.count);
    this.count++;
    console.log(this.logArray);
  }
  ngOnInit() {
  }


}
