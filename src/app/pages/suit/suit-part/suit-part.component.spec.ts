import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitPartComponent } from './suit-part.component';

describe('SuitPartComponent', () => {
  let component: SuitPartComponent;
  let fixture: ComponentFixture<SuitPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
