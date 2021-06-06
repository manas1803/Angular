import { Component, EventEmitter, Output } from '@angular/core';
import { AccountServiceService } from '../Services/account-service.service';
import { LoggingService } from '../Services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private loggingService:LoggingService,private accountService:AccountServiceService){
    this.accountService.statusUpdated.subscribe((status:string)=>{
      alert('New status changed to '+status);
    })
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountService.addAccount(accountName,accountStatus);
  }
}
