import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountServiceService } from '../Services/account-service.service';
import { LoggingService } from '../Services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService:LoggingService,private accountService:AccountServiceService){}
  onSetTo(status: string) {
    this.accountService.updateAccount(this.id,status);
    this.accountService.statusUpdated.emit(status);
  }
}
