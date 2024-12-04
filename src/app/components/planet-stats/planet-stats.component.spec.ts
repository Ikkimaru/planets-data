import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetStatsComponent } from './planet-stats.component';

describe('PlanetStatsComponent', () => {
  let component: PlanetStatsComponent;
  let fixture: ComponentFixture<PlanetStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
