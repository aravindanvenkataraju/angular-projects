import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: {}[] = []
  constructor (private usersService: UsersService){
    this.usersService.statusUpdated.subscribe((status: boolean) => this.users = this.usersService.getInactiveUsers());
  }
  ngOnInit(): void {
    this.users = this.usersService.getInactiveUsers();
  }
  onSetToActive(id: number) {
    this.usersService.toggleStatus(id);
  }
}
