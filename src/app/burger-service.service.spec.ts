import { TestBed, inject } from '@angular/core/testing';

import { BurgerServiceService } from './burger-service.service';

describe('BurgerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurgerServiceService]
    });
  });

  it('should be created', inject([BurgerServiceService], (service: BurgerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
