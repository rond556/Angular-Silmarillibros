import { TestBed } from '@angular/core/testing';

import { CharacterTableService } from './character-table.service';

describe('CharacterTableService', () => {
  let service: CharacterTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
