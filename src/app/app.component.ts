import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { Game } from "./models/game";
import { Card } from './models/Card';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  gameStatus='Not Started';
  count=0;
  Start:boolean=false;
  Show:boolean=false;
  game:Game= new Game();
  cardTypeClass:string;


  ngOnInit(): void {

    this.game.startGame();
  }

  startClick():void {

    this.gameStatus='Started';
    this.Start=true;

  }
  restartClick():void {

   this.game.startGame();
   this.gameStatus='Started';
  }

  drawClick():void {


    const card=this.game.deck.pop();
    this.game.player1.hand.push(card);
    if(this.game.deck.length==0)
    {
      this.gameStatus='Ended';
      return;
    }




  }

}
