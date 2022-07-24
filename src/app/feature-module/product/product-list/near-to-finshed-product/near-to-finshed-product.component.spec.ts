import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearToFinshedProductComponent } from './near-to-finshed-product.component';

describe('NearToFinshedProductComponent', () => {
  let component: NearToFinshedProductComponent;
  let fixture: ComponentFixture<NearToFinshedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearToFinshedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearToFinshedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
