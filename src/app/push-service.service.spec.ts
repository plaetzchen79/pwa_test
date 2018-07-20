import { TestBed, inject } from '@angular/core/testing';

import { PushService } from './push-service.service';

describe('PushServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushService]
    });
  });

  it('should be created', inject([PushService], (service: PushService) => {
    expect(service).toBeTruthy();
  }));
});
