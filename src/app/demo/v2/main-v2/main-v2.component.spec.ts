import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainV2Component } from './main-v2.component';

describe('MainV2Component', () => {
  let component: MainV2Component;
  let fixture: ComponentFixture<MainV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
