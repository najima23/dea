import { TestBed } from '@angular/core/testing';

import { DeaService } from './dea.service';

describe('DeaService', () => {
  let service: DeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
