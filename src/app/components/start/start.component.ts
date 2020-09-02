import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/gameService'
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  numberOfPlayers: number = 0;
  
  players: string[]= [];

  constructor(private gameService : GameService,
    private router: Router) { }

  ngOnInit(): void {
    this.gameService.numberOfPlayers$.subscribe(
      value => this.numberOfPlayers = value
    );

  }

  numberOfPlayersClicked(num) {
    this.gameService.numberOfPlayers$.next(num);
    this.players = new Array(num).fill("bbb");
  }

  startClicked(){
    console.log(this.players);
    
    let names = [];
    for (let index = 0; index < this.numberOfPlayers; index++) {
        names.push(eval("this.playerName" + (index +1)));
    }

    this.gameService.setPlayers(names);
    //this.router.navigateByUrl("/game");
  }

  changeVal(a ,b){
    console.log(a);
    console.log(b);
    
  }
}
