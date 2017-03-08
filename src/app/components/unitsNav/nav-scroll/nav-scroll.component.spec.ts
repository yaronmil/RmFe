import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavScrollComponent } from './nav-scroll.component';

describe('NavScrollComponent', () => {
  let component: NavScrollComponent;
  let fixture: ComponentFixture<NavScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
