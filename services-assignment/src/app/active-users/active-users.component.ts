import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: {}[] = []
  constructor (private usersService: UsersService){
    this.usersService.statusUpdated.subscribe((status: boolean) =>{
      this.users = this.usersService.getActiveUsers()
    } );
  }
  ngOnInit(): void {
    this.users = this.usersService.getActiveUsers();
    console.log(this.users);
  }

  onSetToInactive(id: number) {
    this.usersService.toggleStatus(id);
  }
}
