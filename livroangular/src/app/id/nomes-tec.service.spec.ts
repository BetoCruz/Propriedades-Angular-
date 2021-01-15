import { TestBed } from '@angular/core/testing';

import { NomesTecService } from './nomes-tec.service';

describe('NomesTecService', () => {
  let service: NomesTecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomesTecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
