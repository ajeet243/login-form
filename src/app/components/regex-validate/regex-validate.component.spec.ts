import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexValidateComponent } from './regex-validate.component';

describe('RegexValidateComponent', () => {
  let component: RegexValidateComponent;
  let fixture: ComponentFixture<RegexValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
