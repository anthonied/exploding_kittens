import { Card } from "./cards";
import { Card_Repository } from "../repository/card_repository";
import { Player } from "./player";



export class Game{
  deck: Card[];
  card_repo= new Card_Repository();
  player1: Player;
  players: Player[];

  constructor(){

  }


  shuffle(){
    this.deck.sort(() => Math.random() - 0.5);
  }

  startGame(name: string){
    this.player1 = new Player(name);
    this.deck=[...this.card_repo.deck];
    this.shuffle();
  }
}

