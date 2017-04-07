import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  {
    path:'',
    component: ListPlayersComponent
  },
  {
    path: 'player/:id',
    component: DetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
