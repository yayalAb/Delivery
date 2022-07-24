import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpProductListComponent } from './exp-product-list.component';

describe('ExpProductListComponent', () => {
  let component: ExpProductListComponent;
  let fixture: ComponentFixture<ExpProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
