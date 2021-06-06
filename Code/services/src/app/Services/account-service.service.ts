import { Injectable,EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountServiceService {
  constructor(private loggingService:LoggingService){}
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  addAccount(name:string,status:string) {
    this.accounts.push({name,status});
    this.loggingService.loggingStatus(status);
  }
  statusUpdated = new EventEmitter<string>();
  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.loggingStatus(status);

  }
}
