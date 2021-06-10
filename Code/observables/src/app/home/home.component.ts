import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval,Observable,Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  private myObservable:Subscription;
  constructor() { }
  ngOnInit() 
  {
    // this.myObservable = interval(1000).subscribe(
    //   (count)=>{
    //     count++;
    //     console.log(count);
    //   }
    // )

    const observableFromScratch = Observable.create((observer)=>{
      let count=1;
      setInterval(()=>{
        observer.next(count);
        count++;  
      },1000)
    },(error)=>{
      console.log(error);
    })
    this.myObservable = observableFromScratch.subscribe((count)=>{
      console.log(count);
    })
  }
  ngOnDestroy(): void {
    this.myObservable.unsubscribe();
  }

}
