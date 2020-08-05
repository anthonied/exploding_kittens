import { Component, OnInit } from '@angular/core';
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


  dcards:Card[]=[];





  ngOnInit(): void {
    this.game.shuffle();
  }

  startClick():void {

    this.gameStatus='Started';
    this.Start=true;

  }

  drawClick():void {

    this.Show=true;
    if(this.game.deck.length!=0)
    {
      this.dcards[this.count]=this.game.deck.shift();

      switch(this.dcards[this.count].type){
        case "c":
          this.cardTypeClass="card bg-light mb-3";

        break;
        case "k":
          this.cardTypeClass="card text-white bg-dark mb-3";

        break;
        case "a":
          this.cardTypeClass="card text-white bg-danger mb-3";

        break;
        case "d":
          this.cardTypeClass="card text-white bg-success mb-3";

        break;
        default:
          this.cardTypeClass="card text-white bg-primary mb-3";

          }


      this.count++;
    }

  }

}
