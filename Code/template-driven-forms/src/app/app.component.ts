import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('data',{static:false})signUpFormdata:NgForm;
  defaultSelect = 'pet';

  submitted:boolean = false;
  username = "Manas";
  userDataForm = {
    username:'',
    email:'',
    gender:'',
    question:'',
    answer:''
  };
  genders = ['Male','Female']
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit(){
    this.submitted=true;
    this.userDataForm.username=this.signUpFormdata.value.userData.username;
    this.userDataForm.email = this.signUpFormdata.value.userData.email;
    this.userDataForm.gender = this.signUpFormdata.value.gender;
    this.userDataForm.question = this.signUpFormdata.value.secret;
    this.userDataForm.answer =  this.signUpFormdata.value.questionAnswer;

    this.signUpFormdata.reset();
  }
}
