import { TestBed } from '@angular/core/testing';

import { GetValueService } from './get-value.service';

describe('GetValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetValueService = TestBed.get(GetValueService);
    expect(service).toBeTruthy();
  });
});
