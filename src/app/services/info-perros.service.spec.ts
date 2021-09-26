import { TestBed } from '@angular/core/testing';

import { InfoPerrosService } from './info-perros.service';

describe('InfoPerrosService', () => {
  let service: InfoPerrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPerrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
