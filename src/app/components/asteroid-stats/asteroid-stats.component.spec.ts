import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidStatsComponent } from './asteroid-stats.component';

describe('AsteroidStatsComponent', () => {
  let component: AsteroidStatsComponent;
  let fixture: ComponentFixture<AsteroidStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsteroidStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsteroidStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
