import { TestBed } from '@angular/core/testing';

import { AngularFireStoreService } from './angular-fire-store.service';

describe('AngularFireStoreService', () => {
  let service: AngularFireStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFireStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
