import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBabComponent } from './nav-bab.component';

describe('NavBabComponent', () => {
  let component: NavBabComponent;
  let fixture: ComponentFixture<NavBabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
