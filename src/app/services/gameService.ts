import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Player } from '../models/player';


@Injectable({
  providedIn: 'root',
})

export class GameService {
  numberOfPlayers$ = new BehaviorSubject<number>(4);
  players$= new BehaviorSubject<Player[]>([]);


  setPlayers(names: string[]){
    let players: Player[] = [];
    names.forEach(n =>  players.push(new Player(n)));
    this.players$.next(players);


  }

}
