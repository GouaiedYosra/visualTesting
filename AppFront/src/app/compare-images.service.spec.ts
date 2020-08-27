import { TestBed } from '@angular/core/testing';

import { CompareImagesService } from './compare-images.service';

describe('CompareImagesService', () => {
  let service: CompareImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
