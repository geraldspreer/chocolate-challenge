import { TestBed } from '@angular/core/testing';

import { ChocolateDataService } from './chocolate.service';

describe('ChocolateService', () => {
  let service: ChocolateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChocolateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
