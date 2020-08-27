import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTestComponent } from './details-test.component';

describe('DetailsTestComponent', () => {
  let component: DetailsTestComponent;
  let fixture: ComponentFixture<DetailsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
