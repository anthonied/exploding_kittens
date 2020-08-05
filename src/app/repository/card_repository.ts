import { Card } from "../models/Card";

export class Card_Repository{

  tacoCard: Card= new Card("TacoCat"," I am A Palindrome ","c");
  kittenCard: Card= new Card("Exploding kitten"," I go boom ","k");
  exploreCard: Card= new Card("See the Future","","a");
  laserdefuseCard: Card= new Card("Defuse"," Laser pointer ","d");

  deck: Card[]=[this.tacoCard,this.kittenCard,this.exploreCard,this.laserdefuseCard];






}
