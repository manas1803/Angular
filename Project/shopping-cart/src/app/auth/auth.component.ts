import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  switchMode(){
    this.isLoginMode=!this.isLoginMode;
  }
  onSubmit(formData:NgForm){
    console.log(formData.value);
    formData.reset();
  }
}
