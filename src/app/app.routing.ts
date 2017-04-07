import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';

const appRoutes: Routes = [
  {
    path:'',
    component: ListPlayersComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
