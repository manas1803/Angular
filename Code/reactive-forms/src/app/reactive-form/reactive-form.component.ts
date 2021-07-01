import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  formData:FormGroup;
  ngOnInit() 
  {
    this.formData = new FormGroup({
      "studentId" : new FormControl(null,[Validators.required]),
      "studentName" : new FormControl(null,[Validators.required]),
      "teacherData" : new FormGroup({
        "teacherName" : new FormControl(null),
        "teacherSubject" : new FormControl(null)
      }),
      "marks" : new FormControl(null,[Validators.required,Validators.maxLength(3),Validators.minLength(1)])
    });
  }
  onSubmit(){
    console.log(this.formData);
  }

}
