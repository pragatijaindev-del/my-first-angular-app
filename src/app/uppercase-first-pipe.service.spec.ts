import { TestBed } from '@angular/core/testing';

import { UppercaseFirstPipeService } from './uppercase-first-pipe.service';

describe('UppercaseFirstPipeService', () => {
  let service: UppercaseFirstPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UppercaseFirstPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
