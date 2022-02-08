import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameNumbers:number[]=[];

  onNumberGenerated(eventNumberObject: {eventNumber: number}){
    console.log(eventNumberObject.eventNumber);
    this.gameNumbers.push(eventNumberObject.eventNumber);
  }

  onGameStarted({}){
    this.gameNumbers = [];
  }
}
