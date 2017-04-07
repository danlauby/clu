import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from './../player.service';
import { Player } from './../player.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [PlayerService]
})
export class UpdateComponent implements OnInit {
  @Input() selectedPlayer;
  playerToDisplay;
  currentPlayer: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  beginUpdatingPlayer(PlayerToUpdate){
   this.playerService.updatePlayer(PlayerToUpdate);
 }

 beginDeletingPlayer(playerToDelete){
  //  if(confirm("Arew you sure you want FIRE this player?")){
  //    this.playerService.deletePlayer(playerToDelete);
  //  }

  this.playerToDisplay.subscribe(player => {
     this.currentPlayer = new Player(player.name, player.age, player.birthplace, player.team, player.position, player.jerseyNumber, player.image, player.goalsThisSeason);
     this.currentPlayer.$key = player.$key;
   });
  this.playerService.updatePlayer(this.currentPlayer);

 }
}
