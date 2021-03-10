import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridV2Component } from './ag-grid-v2.component';

describe('AgGridV2Component', () => {
  let component: AgGridV2Component;
  let fixture: ComponentFixture<AgGridV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
