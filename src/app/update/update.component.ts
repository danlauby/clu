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
   if(confirm("Arew you sure you want FIRE this player?")){
     this.playerService.deletePlayer(playerToDelete);
   }
 }
}
