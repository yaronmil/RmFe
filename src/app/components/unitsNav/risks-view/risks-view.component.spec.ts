import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisksViewComponent } from './risks-view.component';

describe('RisksViewComponent', () => {
  let component: RisksViewComponent;
  let fixture: ComponentFixture<RisksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisksViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
