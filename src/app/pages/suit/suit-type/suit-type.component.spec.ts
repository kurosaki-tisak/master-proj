import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitTypeComponent } from './suit-type.component';

describe('SuitTypeComponent', () => {
  let component: SuitTypeComponent;
  let fixture: ComponentFixture<SuitTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
