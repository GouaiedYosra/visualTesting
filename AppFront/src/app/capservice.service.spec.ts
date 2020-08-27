import { TestBed } from '@angular/core/testing';

import { CapserviceService } from './capservice.service';

describe('CapserviceService', () => {
  let service: CapserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
