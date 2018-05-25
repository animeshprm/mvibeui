import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMenuMvibeComponent } from './tab-menu-mvibe.component';

describe('TabMenuMvibeComponent', () => {
  let component: TabMenuMvibeComponent;
  let fixture: ComponentFixture<TabMenuMvibeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMenuMvibeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMenuMvibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
