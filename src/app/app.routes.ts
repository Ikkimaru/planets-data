import { Routes } from '@angular/router';
import {PlanetStatsComponent} from './components/planet-stats/planet-stats.component';
import {MoonStatsComponent} from './components/moon-stats/moon-stats.component';

export const routes: Routes = [
  { path: 'home', component: PlanetStatsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'moon/:id', component: MoonStatsComponent },
];
