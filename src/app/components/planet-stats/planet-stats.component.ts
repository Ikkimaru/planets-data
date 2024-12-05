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
    // Fetch planets
    this.planetDataService.getLocalPlanets().subscribe({
      next: (data) => {
        this.planetsWithDetails = data.bodies.sort((a, b) => a.perihelion - b.perihelion); // Sort by perihelion in ascending order

        // Fetch dwarf planets and add them to the list
        this.planetDataService.getLocalDwarfPlanets().subscribe({
          next: (dwarfData) => {
            this.planetsWithDetails = this.planetsWithDetails.concat(dwarfData.bodies)
              .sort((a, b) => a.perihelion - b.perihelion); // Sort again after merging
          },
          error: (err) => console.error('Error fetching dwarf planet data:', err),
        });
      },
      error: (err) => console.error('Error fetching planet data:', err),
    });
  }




}
