import {Component, OnInit} from '@angular/core';
import {PlanetDataService} from '../../services/planet-data.service';
import {DecimalPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-asteroid-stats',
  standalone: true,
  imports: [
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './asteroid-stats.component.html',
  styleUrl: './asteroid-stats.component.css'
})
export class AsteroidStatsComponent implements OnInit {
  asteroids: any[] = [];

  constructor(private readonly planetDataService: PlanetDataService) {}

  ngOnInit(): void {
    this.planetDataService.getLocalAsteroids().subscribe({
      next: (data) => {
        this.asteroids = data.bodies.sort((a, b) => a.perihelion - b.perihelion); // Sort by perihelion
      },
      error: (err) => console.error('Error fetching asteroid data:', err),
    });
  }
}
