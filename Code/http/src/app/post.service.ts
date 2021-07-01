import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http:HttpClient) { }
  apiUrl = 'https://practiceangular-9a438-default-rtdb.firebaseio.com/posts.json';
  errorSubject = new Subject<string>();

  postingData(title,content){
    const postData = {title:title,content:content}
    this.http
      .post(this.apiUrl,postData,
        {
          observe: 'response'
        }).subscribe(responseData => {
        //console.log(responseData);
      },error=>{
        this.errorSubject.next(error.message);
      });
  }
  fetchingData(){
    let myParamsForApi = new HttpParams();
    myParamsForApi = myParamsForApi.append('print','pretty');
    myParamsForApi = myParamsForApi.append('roleId','5');
    return this.http.get(this.apiUrl,
    {
      headers:new HttpHeaders({'custom-header':'manas'}),
      params : myParamsForApi
    })
    .pipe(map(responseData=>{
      const postArray = [];
      for(let key in responseData){
      if(responseData.hasOwnProperty(key)){
        postArray.push({... responseData[key],id:key})
      }
    }
    return postArray;
    }))
  }
  deletingData(){
    return this.http.delete(this.apiUrl,
    {
      observe:'events'
    }).pipe(tap(eventsObserved=>{
      if(eventsObserved.type===HttpEventType.Sent){
        console.log("Data is sent");
      }
      else if(eventsObserved.type===HttpEventType.Response)
      console.log("Data received");
    }));
  }
}
