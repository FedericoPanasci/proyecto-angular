import { TestBed } from '@angular/core/testing';

import { AllGuardsGuard } from './all-guards.guard';

describe('AllGuardsGuard', () => {
  let guard: AllGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
