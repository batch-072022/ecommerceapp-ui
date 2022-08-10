import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyProductsComponent } from './list-my-products.component';

describe('ListMyProductsComponent', () => {
  let component: ListMyProductsComponent;
  let fixture: ComponentFixture<ListMyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMyProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
