import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinshedProductComponent } from './finshed-product.component';

describe('FinshedProductComponent', () => {
  let component: FinshedProductComponent;
  let fixture: ComponentFixture<FinshedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinshedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinshedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
