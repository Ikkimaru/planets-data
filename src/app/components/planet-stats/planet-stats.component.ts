import {Component, OnInit} from '@angular/core';
import {PlanetDataService} from '../../services/planet-data.service';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-planet-stats',
  standalone: true,
  imports: [
    DecimalPipe,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './planet-stats.component.html',
  styleUrl: './planet-stats.component.css'
})
export class PlanetStatsComponent implements OnInit {
  planetsWithDetails: any[] = [];

  constructor(private readonly planetDataService: PlanetDataService) {}

  ngOnInit(): void {
    this.planetDataService.getLocalPlanets().subscribe({
      next: (data) => {
        this.planetsWithDetails = data.bodies
          .filter((body) => body.isPlanet)
          .sort((a, b) => a.perihelion - b.perihelion); // Ascending order
      },
      error: (err) => console.error('Error fetching planet data:', err),
    });

  }
}
