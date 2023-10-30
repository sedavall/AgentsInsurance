import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestiveComponent } from './harvestive.component';

describe('HarvestiveComponent', () => {
  let component: HarvestiveComponent;
  let fixture: ComponentFixture<HarvestiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarvestiveComponent]
    });
    fixture = TestBed.createComponent(HarvestiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
