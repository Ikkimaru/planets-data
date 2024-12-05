import { Injectable } from '@angular/core';
import {BodiesResponse, CelestialBody} from '../models/celestialBody-model';
import {HttpClient} from '@angular/common/http';
import {filter, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetDataService {
  private readonly apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies/';
  private readonly planetsUrl = '/planets.json';

  constructor(private readonly http: HttpClient) {
  }

  getPlanets(): Observable<BodiesResponse> {
    return this.http.get<BodiesResponse>(this.apiUrl);
  }

  getLocalPlanets(): Observable<BodiesResponse> {
    return this.http.get<BodiesResponse>(this.planetsUrl).pipe(
      map((response) => {
        const filteredPlanets = response.bodies.filter((body) => body.isPlanet);

        return { bodies: filteredPlanets };
      })
    );
  }

  getLocalDwarfPlanets(): Observable<BodiesResponse> {
    return this.http.get<BodiesResponse>(this.planetsUrl).pipe(
      map((response) => {
        const filteredDwarfPlanets = response.bodies.filter((body) => body.bodyType === "Dwarf Planet");

        return { bodies: filteredDwarfPlanets };
      })
    );
  }

  getMoonDetails(moonId: string): Observable<CelestialBody> {
    return this.http.get<{ bodies: CelestialBody[] }>(this.planetsUrl).pipe(
      map((response) =>
        response.bodies.find((body) => body.name === moonId && body.bodyType === 'Moon')
      ),
      filter((moon) => moon !== undefined)
    );
  }


}
