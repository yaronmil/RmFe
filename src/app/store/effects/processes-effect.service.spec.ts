import { TestBed, inject } from '@angular/core/testing';

import { LoadProcessesEffectService } from './load-processes-effect.service';

describe('LoadProcessesEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadProcessesEffectService]
    });
  });

  it('should ...', inject([LoadProcessesEffectService], (service: LoadProcessesEffectService) => {
    expect(service).toBeTruthy();
  }));
});
