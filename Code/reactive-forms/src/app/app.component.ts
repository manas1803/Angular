import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm:FormGroup;
  forbiddenUsers = ['Manas','Arjun'];

  myNewForm:FormGroup;
  ngOnInit() 
  {
    // this.signupForm = new FormGroup(
    // {
    //   'userData' : new FormGroup(
    //     {
    //       'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
      
    //       'email' : new FormControl(null,[Validators.email,Validators.required],this.forbiddenEmails)
    //     }),
    //   'gender': new FormControl('male',Validators.required),
    //   'hobbies' : new FormArray([])
    // });
    this.myNewForm = new FormGroup(
    {
      'projectName' : new FormControl(null,[Validators.required],this.forBiddenProjectTest2),
      'mail' : new FormControl(null,[Validators.required,Validators.email]),
      'status' : new FormControl(null)
    })
  }
  // onSubmit(){
  //   console.log(this.signupForm);
  // }
  // addHobby(){
  //   const controls = new FormControl(null,Validators.required);
  //   (<FormArray>this.signupForm.get('hobbies')).push(controls);
  // }
  // forbiddenNames(controls:FormControl):{[s:string]:boolean}{
  //   if(this.forbiddenUsers.indexOf(controls.value) !== -1){
  //     return {'forbiddenUserNames':true}
  //   }
  //   return null;
  // }
  // forbiddenEmails(controls:FormControl):Promise<any> | Observable<any>{
  //   const promise = new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       if(controls.value==='test@test.com'){
  //         resolve({'forbiddenEmail':true})
  //       }
  //       else{
  //         resolve(null);
  //       }
  //     },1500)
  //   })
  //   return promise;
  // }
  onSubmitClick(){
    console.log(this.myNewForm);
  }
  forBiddenProjectTest(controls:FormControl):{[s:string]:boolean}{
    if(controls.value === 'Test'){
      return {'forbiddenProject':true}
    }
    else{
      return null;
    }
  }
  forBiddenProjectTest2(controls:FormControl):Observable<any>| Promise<any>{
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(controls.value==='Test2'){
          resolve({'forBiddenProject':true});
        }
        else{
          resolve(null);
        }
      },1500)
    })
    return promise;
  }
}
