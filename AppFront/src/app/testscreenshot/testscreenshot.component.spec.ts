import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscreenshotComponent } from './testscreenshot.component';

describe('TestscreenshotComponent', () => {
  let component: TestscreenshotComponent;
  let fixture: ComponentFixture<TestscreenshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestscreenshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestscreenshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
