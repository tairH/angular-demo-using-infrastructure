import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalV2Component } from './personal-v2.component';

describe('PersonalV2Component', () => {
  let component: PersonalV2Component;
  let fixture: ComponentFixture<PersonalV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
