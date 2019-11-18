import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitColorComponent } from './suit-color.component';

describe('SuitColorComponent', () => {
  let component: SuitColorComponent;
  let fixture: ComponentFixture<SuitColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
