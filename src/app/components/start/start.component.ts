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
  playerName1: string;
  playerName2: string;
  playerName3: string;
  playerName4: string;
  constructor(private gameService : GameService,
    private router: Router) { }

  ngOnInit(): void {
    this.gameService.numberOfPlayers$.subscribe(
      value => this.numberOfPlayers = value
    );

  }

  numberOfPlayersClicked(num) {
    this.gameService.numberOfPlayers$.next(num);
  }

  startClicked(){
    let names = [];
    for (let index = 0; index < this.numberOfPlayers; index++) {
        names.push(eval("this.playerName" + (index +1)));
    }

    this.gameService.setPlayers(names);
    this.router.navigateByUrl("/game");
  }
}
