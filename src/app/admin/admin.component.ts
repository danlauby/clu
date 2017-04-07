import { Component, OnInit, Output } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { PlayerService } from './../player.service';
import { Player } from './../player.model';
import { ListPlayersComponent } from './../list-players/list-players.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(public PlayerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: string, birthplace: string, team: string, position: string, jerseyNumber: string, image: string, goalsThisSeason: number) {
    let newPlayer = new Player(name, age, birthplace, team, position, jerseyNumber, image, goalsThisSeason);
    this.PlayerService.addPlayer(newPlayer);
 }
}
