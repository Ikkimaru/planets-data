import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonStatsComponent } from './moon-stats.component';

describe('MoonStatsComponent', () => {
  let component: MoonStatsComponent;
  let fixture: ComponentFixture<MoonStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoonStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
