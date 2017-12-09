import { TestBed, inject } from '@angular/core/testing';

import { IsLoggedInService } from './is-logged-in.canactivate.service';

describe('IsLoggedIn.CanactivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoggedInService]
    });
  });

  it('should be created', inject([IsLoggedInService], (service: IsLoggedInService) => {
    expect(service).toBeTruthy();
  }));
});
