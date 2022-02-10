import { Injectable, OnInit } from "@angular/core";
import { UsersService } from "./users.service";

@Injectable({providedIn: 'root'})
export class CounterService{
    private activeCounter: number = 0;
    private inactiveCounter: number = 0;
    constructor(private usersService: UsersService){
        this.usersService.statusUpdated.subscribe((status: boolean) =>{
            status?this.inactiveCounter++:this.activeCounter++;
        });
    }

    getActiveCounter(){
        return this.activeCounter;
    }

    getInactiveCounter(){
        return this.inactiveCounter;
    }
}