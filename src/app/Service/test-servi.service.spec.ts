import { TestBed } from '@angular/core/testing';

import { TestServiService } from './test-servi.service';

describe('TestServiService', () => {
  let service: TestServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
