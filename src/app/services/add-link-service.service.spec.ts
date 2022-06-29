import { TestBed } from '@angular/core/testing';

import { AddLinkServiceService } from './add-link-service.service';

describe('AddLinkServiceService', () => {
  let service: AddLinkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddLinkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
