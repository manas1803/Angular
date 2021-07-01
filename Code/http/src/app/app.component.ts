import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  loadedPosts = [];
  isFetching:boolean=false;
  error=null;
  errorSubscription:Subscription;
  constructor(private postService:PostService) {}

  ngOnInit() {
    this.isFetching = true;
    this.errorSubscription = this.postService.errorSubject.subscribe((error)=>{
      this.error = error + ' the error by post';
    })
    this.postService.fetchingData().subscribe(responseData=>{
      this.isFetching=false;
      this.loadedPosts = responseData
    },error=>{
      this.error=error.message;
    });
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postService.postingData(postData.title,postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchingData().subscribe(responseData=>{
      this.isFetching=false;
      this.loadedPosts = responseData
    },error=>{
      this.error=error.message;
    });
  }

  onClearPosts() {
    this.postService.deletingData().subscribe(()=>{
      this.loadedPosts = [];
    })
  }
  onHandlingError(){
    this.error=null;
    this.isFetching=false;
  }
  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
