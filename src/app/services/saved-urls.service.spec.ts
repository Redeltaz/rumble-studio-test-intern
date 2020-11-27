import { TestBed } from '@angular/core/testing';

import { SavedUrlsService } from './saved-urls.service';

describe('SavedUrlsService', () => {
  let service: SavedUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
