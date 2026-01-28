import { TestBed } from '@angular/core/testing';

import { GastoService } from './gasto';

describe('Gasto', () => {
  let service: GastoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
