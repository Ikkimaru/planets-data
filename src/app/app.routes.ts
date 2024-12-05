import { Routes } from '@angular/router';
import {PlanetStatsComponent} from './components/planet-stats/planet-stats.component';
import {MoonStatsComponent} from './components/moon-stats/moon-stats.component';
import {AsteroidStatsComponent} from './components/asteroid-stats/asteroid-stats.component';

export const routes: Routes = [
  { path: 'planets', component: PlanetStatsComponent },
  { path: '', redirectTo: 'planets', pathMatch: 'full' },
  { path: 'moon/:id', component: MoonStatsComponent },
  { path: 'asteroids', component: AsteroidStatsComponent },
];
