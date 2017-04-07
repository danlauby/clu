import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css'],
  providers: [PlayerService]
})

export class ListPlayersComponent implements OnInit {

  constructor(private PlayerService: PlayerService) { }

  ngOnInit() {
    // this.PlayerService.getPlayers().subscribe( snap => {
    //   this.players = snap;
    // });
  }

}
