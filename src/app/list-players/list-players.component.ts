import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { PlayerService } from './../player.service';


@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css'],
  providers: [PlayerService]
})

export class ListPlayersComponent implements OnInit {
  currentRoute: string = this.router.url;
  players;
  filterByGoals: string = "allGoals";
  IsHidden = true;
  uid: string;

  constructor(private PlayerService: PlayerService, private router: Router) { }

  ngOnInit() {
    this.PlayerService.getPlayers().subscribe( snap => {
      this.players = snap;
    });
  }

  goToDetail(Clickedplayer) {
    this.router.navigate(['player', Clickedplayer.$key]);
  }

  onChange(selectedGoals: string) {
    this.filterByGoals = selectedGoals;
  }

  onSelect(){
    this.IsHidden = !this.IsHidden;
  }
}
