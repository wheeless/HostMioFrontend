import { TestBed } from '@angular/core/testing';

import { LinkDetailResolver } from './link-detail.resolver';

describe('LinkDetailResolver', () => {
  let resolver: LinkDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LinkDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
