import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcuponComponent } from './addcupon.component';

describe('AddcuponComponent', () => {
  let component: AddcuponComponent;
  let fixture: ComponentFixture<AddcuponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcuponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
