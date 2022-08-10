import { TestBed } from '@angular/core/testing';
import { GetdataService } from './getuserdata.service';
describe('GetdataService', () => {
  let service: GetdataService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdataService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



