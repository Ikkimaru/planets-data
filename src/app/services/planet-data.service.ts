import { Injectable } from '@angular/core';
import {BodiesResponse} from '../models/celestialBody-model';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetDataService {
  private apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies/';

  constructor(private http: HttpClient) {
  }

  getPlanets(): Observable<BodiesResponse> {
    return this.http.get<BodiesResponse>(this.apiUrl);
  }
}
