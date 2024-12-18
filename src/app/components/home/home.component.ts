import {Component, OnInit} from '@angular/core';
import {PlanetDataService} from '../../services/planet-data.service';
import { saveAs } from 'file-saver';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  constructor(private readonly planetDataService: PlanetDataService) {}
  fetchAndSavePlanets(): void {
    this.planetDataService.getPlanets().subscribe((data) => {
      const jsonString = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      saveAs(blob, 'planets.json');
    });
  }
}
