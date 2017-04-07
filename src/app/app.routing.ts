import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path:'',
    component: ListPlayersComponent
  },
  {
    path: 'player/:id',
    component: DetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
