import { TestBed } from '@angular/core/testing';

import { ScreensizeService } from './screensize.service';

describe('ScreensizeService', () => {
  let service: ScreensizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreensizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
