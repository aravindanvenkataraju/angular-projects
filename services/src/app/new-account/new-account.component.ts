import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {
  constructor(private accountsService: AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status: string) => {
        alert('someone updated the status to : '+status);
      }
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.createAccount({name: accountName, status: accountStatus});
  }
}
