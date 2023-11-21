import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsSummaryComponent } from './solutions-summary.component';

describe('SolutionsSummaryComponent', () => {
  let component: SolutionsSummaryComponent;
  let fixture: ComponentFixture<SolutionsSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsSummaryComponent]
    });
    fixture = TestBed.createComponent(SolutionsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
