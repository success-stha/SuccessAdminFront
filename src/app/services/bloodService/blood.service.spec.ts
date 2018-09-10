import { TestBed, inject } from '@angular/core/testing';

import { BloodService } from './blood.service';

describe('BloodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloodService]
    });
  });

  it('should be created', inject([BloodService], (service: BloodService) => {
    expect(service).toBeTruthy();
  }));
});
