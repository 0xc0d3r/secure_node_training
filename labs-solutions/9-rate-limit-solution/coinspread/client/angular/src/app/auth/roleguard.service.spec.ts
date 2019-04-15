/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoleGuard } from './roleguard.service';

describe('Service: Roleguard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGuard]
    });
  });

  it('should ...', inject([RoleGuard], (service: RoleGuard) => {
    expect(service).toBeTruthy();
  }));
});
