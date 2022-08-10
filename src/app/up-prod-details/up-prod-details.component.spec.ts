import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpProdDetailsComponent } from './up-prod-details.component';

describe('UpProdDetailsComponent', () => {
  let component: UpProdDetailsComponent;
  let fixture: ComponentFixture<UpProdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpProdDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpProdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
