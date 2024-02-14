import { TestBed } from '@angular/core/testing';

import { InsuranceDocumentService } from './insurance-document.service';

describe('InsuranceDocumentService', () => {
  let service: InsuranceDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
