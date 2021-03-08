import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  countNum = 0;
  @Output('gameStart') gameStart = new EventEmitter<number>();
  interval; 
  startGame(){
      this.interval = setInterval(()=>{
        this.gameStart.emit(this.countNum+1);
        this.countNum++;
      },1000);
   }
   pauseGame(){
     clearInterval(this.interval);
   }
}
