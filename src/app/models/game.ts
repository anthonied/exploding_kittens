import { Card } from "./Card";
import { Card_Repository } from "../repository/card_repository";
import { Player } from "./player";

export class Game{
  deck: Card[];
  card_repo= new Card_Repository();
  player1=new Player("pieter");

  constructor(){



  }


  shuffle(){
    this.deck.sort(() => Math.random() - 0.5);
  }

  startGame(){
    this.deck=[...this.card_repo.deck];
    console.log(this.deck);

    this.player1.hand=[];
    this.shuffle();
  }
}

