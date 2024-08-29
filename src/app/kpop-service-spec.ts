import { TestBed } from '@angular/core/testing';

import { KpopService } from './kpop.service';

describe('KpopService', () => {
  let service: KpopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KpopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});