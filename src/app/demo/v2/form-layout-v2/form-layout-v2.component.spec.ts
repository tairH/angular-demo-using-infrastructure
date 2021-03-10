import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayoutV2Component } from './form-layout-v2.component';

describe('FormLayoutV2Component', () => {
  let component: FormLayoutV2Component;
  let fixture: ComponentFixture<FormLayoutV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLayoutV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLayoutV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
