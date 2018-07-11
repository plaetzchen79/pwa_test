import { TestBed, inject } from '@angular/core/testing';

import { PushServiceService } from './push-service.service';

describe('PushServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushServiceService]
    });
  });

  it('should be created', inject([PushServiceService], (service: PushServiceService) => {
    expect(service).toBeTruthy();
  }));
});
