import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UsersService{
    users =  [
        {name: 'Max', active: true},
        {name: 'Anna', active: true},
        {name: 'Chris', active: false},
        {name: 'Manu', active: false}];
    
    statusUpdated: EventEmitter<boolean> = new EventEmitter();

    toggleStatus(userId: number){
        console.log('user ID: ', userId);
        let currentStatus = this.users[userId].active = !this.users[userId].active;
        this.statusUpdated.emit(currentStatus);
    }

    getActiveUsers(){
        return this.users.map((user, index) => {return {...user,  userId: index}}).filter(user => user.active);
    }

    getInactiveUsers(){
        return this.users.map((user, index) => {return {...user,  userId: index}}).filter(user => !user.active);
    }
}