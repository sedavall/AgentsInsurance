import { TestBed } from '@angular/core/testing';

import { SolutionsummaryService } from './solutionsummary.service';

describe('SolutionsummaryService', () => {
  let service: SolutionsummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutionsummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
