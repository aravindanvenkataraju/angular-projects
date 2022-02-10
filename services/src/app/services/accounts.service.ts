import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({providedIn: 'root'})
export class AccountsService {
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
  statusUpdated: EventEmitter<string> = new EventEmitter();

  constructor(private logginService: LoggingService){

  }

  createAccount(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
    this.logginService.logStatusChange(newAccount.status);
  }

  updateAccountStatus(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.logginService.logStatusChange(updateInfo.newStatus);
  }

  
}