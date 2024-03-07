import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ChocolateDataService } from './chocolate.service';

describe('ChocolateDataService', () => {
  let service: ChocolateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [ChocolateDataService],
        imports: [HttpClientTestingModule]
      }
    );
    service = TestBed.inject(ChocolateDataService);
  });

  it('defines the service', () => {
    expect(service).toBeDefined();
  });

  const httpSpy = (method: any) => {
    const suspect = TestBed.inject(HttpClient);
    return spyOn(suspect, method).and.returnValue(of(true));
  };
});


