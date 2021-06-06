import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from './Services/account-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  accounts:{name:string,status:string}[] = [];
  constructor(private accountService:AccountServiceService){}
  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
  
}
