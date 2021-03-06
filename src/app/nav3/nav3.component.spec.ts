import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav3Component } from './nav3.component';

describe('Nav3Component', () => {
  let component: Nav3Component;
  let fixture: ComponentFixture<Nav3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nav3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
