import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllscreenshotsComponent } from './allscreenshots.component';

describe('AllscreenshotsComponent', () => {
  let component: AllscreenshotsComponent;
  let fixture: ComponentFixture<AllscreenshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllscreenshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllscreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
