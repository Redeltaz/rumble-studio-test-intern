import { TestBed } from '@angular/core/testing';

import { SavedTimestampService } from './saved-timestamp.service';

describe('SavedTimestampService', () => {
  let service: SavedTimestampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedTimestampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
