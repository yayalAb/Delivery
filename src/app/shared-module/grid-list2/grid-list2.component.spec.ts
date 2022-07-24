import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridList2Component } from './grid-list2.component';

describe('GridList2Component', () => {
  let component: GridList2Component;
  let fixture: ComponentFixture<GridList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
