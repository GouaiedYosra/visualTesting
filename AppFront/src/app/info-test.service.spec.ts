import { TestBed } from '@angular/core/testing';

import { InfoTestService } from './info-test.service';

describe('InfoTestService', () => {
  let service: InfoTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
