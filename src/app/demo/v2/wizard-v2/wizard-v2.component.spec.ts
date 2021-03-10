import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardV2Component } from './wizard-v2.component';

describe('WizardV2Component', () => {
  let component: WizardV2Component;
  let fixture: ComponentFixture<WizardV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
