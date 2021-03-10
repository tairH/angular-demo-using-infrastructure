import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatGridClientComponent } from './mat-grid-client.component';

describe('MatGridClientComponent', () => {
  let component: MatGridClientComponent;
  let fixture: ComponentFixture<MatGridClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatGridClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatGridClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
