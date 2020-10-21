import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentCallComponent } from './child-parent-call.component';

describe('ChildParentCallComponent', () => {
  let component: ChildParentCallComponent;
  let fixture: ComponentFixture<ChildParentCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildParentCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildParentCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
