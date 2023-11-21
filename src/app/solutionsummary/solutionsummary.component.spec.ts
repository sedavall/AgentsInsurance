import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsummaryComponent } from './solutionsummary.component';

describe('SolutionsummaryComponent', () => {
  let component: SolutionsummaryComponent;
  let fixture: ComponentFixture<SolutionsummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsummaryComponent]
    });
    fixture = TestBed.createComponent(SolutionsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
