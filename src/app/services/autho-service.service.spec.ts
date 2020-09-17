import { TestBed } from '@angular/core/testing';

import { AuthoServiceService } from './autho-service.service';

describe('AuthoServiceService', () => {
  let service: AuthoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
