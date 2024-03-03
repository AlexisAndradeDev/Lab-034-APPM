import { TestBed } from '@angular/core/testing';

import { RecetaApiConsumerService } from './receta-api-consumer.service';

describe('RecetaApiConsumerService', () => {
  let service: RecetaApiConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaApiConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
