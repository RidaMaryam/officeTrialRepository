import { TestBed } from '@angular/core/testing';

import { PrintNameService } from './print-name.service';

describe('PrintNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrintNameService = TestBed.get(PrintNameService);
    expect(service).toBeTruthy();
  });
});
