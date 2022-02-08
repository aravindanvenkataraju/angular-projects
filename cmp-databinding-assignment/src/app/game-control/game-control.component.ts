import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameIntervalId: any;
  @Output() numberGenerated: EventEmitter<{eventNumber: number}> = new EventEmitter<{eventNumber: number}>();
  @Output() gameStarted: EventEmitter<{}> = new EventEmitter<{}>();
  constructor() { }

  ngOnInit(): void {
    this.gameIntervalId = null;
  }

  startGame(){
    console.log('started game..');
    this.gameStarted.emit({});
    this.gameIntervalId = setInterval(()=>{
      this.numberGenerated.emit({eventNumber: Math.floor((Math.random() * 1000) + 1)});
    }, 1000);
  }

  endGame(): void{
    clearInterval(this.gameIntervalId);
    this.gameIntervalId = null;
    console.log("ended the game...");
  }

}
