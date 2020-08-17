import { Component, OnInit } from '@angular/core';
import { Game } from "../../models/game";
import { GameService } from 'src/app/services/gameService';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private gameService : GameService) { }


  gameStatus='Not Started';
  count=0;
  Start:boolean=false;
  Show:boolean=false;
  game:Game= new Game();
  cardTypeClass:string;
  numberOfPlayers: number = 0;
  players: Player[];

  getState(){
    this.gameService.numberOfPlayers$.subscribe(
      value => this.numberOfPlayers = value
    );
    this.gameService.players$.subscribe(players =>
      this.players = players
      );
  }

  ngOnInit(): void {
    this.getState();
    this.game.startGame(this.players[2].name);

  }

  startClick():void {

    this.gameStatus='Started';
    this.Start=true;

  }
  restartClick():void {

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
