/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RightService } from './right.service';

describe('RightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RightService]
    });
  });

  it('should ...', inject([RightService], (service: RightService) => {
    expect(service).toBeTruthy();
  }));
});
