import { Card } from "./Card";
import { Card_Repository } from "../repository/card_repository";
import { Player } from "./player";

export class Game{
  deck: Card[];
  card_repo= new Card_Repository();
  player1=new Player("pieter");

  constructor(){

   this.startGame();

  }


  shuffle(){
    this.deck.sort(() => Math.random() - 0.5);
  }

  startGame(){
    this.deck=[...this.card_repo.deck];
    this.player1.hand=[];
  }
}

