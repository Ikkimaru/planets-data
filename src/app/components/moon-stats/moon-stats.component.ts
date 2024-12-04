import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgIf} from '@angular/common';
import{PlanetDataService} from '../../services/planet-data.service';

@Component({
  selector: 'app-moon-stats',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './moon-stats.component.html',
  styleUrl: './moon-stats.component.css'
})
export class MoonStatsComponent implements OnInit {
  moonId: string | null = null;
  moonDetails: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly planetDataService: PlanetDataService
  ) { }

  ngOnInit(): void {
    this.moonId = this.route.snapshot.paramMap.get('id');
    if (this.moonId) {
      this.fetchMoonDetails(this.moonId);
    }
  }

  fetchMoonDetails(moonId: string): void {
    // Use your service to fetch the moon details
    this.planetDataService.getMoonDetails(moonId).subscribe(details => {
      this.moonDetails = details;
    });
  }
}
