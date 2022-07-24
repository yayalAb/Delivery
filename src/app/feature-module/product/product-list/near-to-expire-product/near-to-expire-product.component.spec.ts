import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearToExpireProductComponent } from './near-to-expire-product.component';

describe('NearToExpireProductComponent', () => {
  let component: NearToExpireProductComponent;
  let fixture: ComponentFixture<NearToExpireProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearToExpireProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearToExpireProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
