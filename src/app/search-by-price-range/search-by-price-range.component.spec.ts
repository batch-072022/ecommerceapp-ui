import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPriceRangeComponent } from './search-by-price-range.component';

describe('SearchByPriceRangeComponent', () => {
  let component: SearchByPriceRangeComponent;
  let fixture: ComponentFixture<SearchByPriceRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByPriceRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByPriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
