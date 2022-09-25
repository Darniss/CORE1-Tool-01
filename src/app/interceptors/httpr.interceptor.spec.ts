import { TestBed } from '@angular/core/testing';

import { HttprInterceptor } from './httpr.interceptor';

describe('HttprInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttprInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttprInterceptor = TestBed.inject(HttprInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
