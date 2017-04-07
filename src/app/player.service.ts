import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players');
    console.log(this.players);
  }
  getPlayers() {
    return this.players;
  }

  getPlayerById(playerId: number) {
    return this.angularFire.database.object('/players/' + playerId);
  }


  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  updatePlayer(localUpdatedPlayer){
   let playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
   playerEntryInFirebase.update({name: localUpdatedPlayer.name,
                               age: localUpdatedPlayer.age,
                               birthplace: localUpdatedPlayer.birthplace,
                               team: localUpdatedPlayer.team,
                               position: localUpdatedPlayer.position,
                               jerseyNumber: localUpdatedPlayer.jerseyNumber,
                               image: localUpdatedPlayer.image,
                               goalsThisSeason: localUpdatedPlayer.goalsThisSeason
                              });
 }

 deletePlayer(localPlayerToDelete){
   var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
   playerEntryInFirebase.remove();
 }
}
