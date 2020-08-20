import { Card } from './cards';


export class Player{

name:string;
hand: Card[];


  constructor(n){
    this.name= n;
    this.hand=[];

  }

}
