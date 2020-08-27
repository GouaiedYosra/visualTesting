import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualTestingInfoComponent } from './visual-testing-info.component';

describe('VisualTestingInfoComponent', () => {
  let component: VisualTestingInfoComponent;
  let fixture: ComponentFixture<VisualTestingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualTestingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualTestingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
