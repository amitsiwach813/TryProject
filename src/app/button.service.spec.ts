/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ButtonService } from './button.service';

describe('ButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButtonService]
    });
  });

  it('should ...', inject([ButtonService], (service: ButtonService) => {
    expect(service).toBeTruthy();
  }));
});
