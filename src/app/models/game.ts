import { Card } from "./Card";
import { Card_Repository } from "../repository/card_repository";

export class Game{
  deck: Card[];

  constructor(){
    const card_repo= new Card_Repository();
   this.deck=card_repo.deck;

  }


  shuffle(){
    this.deck.sort(() => Math.random() - 0.5);
  }
}
