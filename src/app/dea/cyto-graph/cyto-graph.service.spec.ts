import { TestBed } from '@angular/core/testing';

import { CytoGraphService } from './cyto-graph.service';

describe('CytoGraphService', () => {
  let service: CytoGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CytoGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
