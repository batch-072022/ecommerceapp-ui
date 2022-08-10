import { ComponentFixture, TestBed } from '@angular/core';

import { ListProdComponent } from './list-prod.component';

describe('ListProdComponent', () => {
  let component: ListProdComponent;
  let fixture: ComponentFixture<ListProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
