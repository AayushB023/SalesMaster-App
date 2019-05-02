import { TestBed } from '@angular/core/testing';

import { AuthDashService } from './auth-dash.service';

describe('AuthDashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthDashService = TestBed.get(AuthDashService);
    expect(service).toBeTruthy();
  });
});
