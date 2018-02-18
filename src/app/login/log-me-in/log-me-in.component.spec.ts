import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMeInComponent } from './log-me-in.component';

describe('LogMeInComponent', () => {
  let component: LogMeInComponent;
  let fixture: ComponentFixture<LogMeInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogMeInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
