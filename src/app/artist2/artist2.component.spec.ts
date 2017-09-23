import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Artist2Component } from './artist2.component';

describe('Artist2Component', () => {
  let component: Artist2Component;
  let fixture: ComponentFixture<Artist2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Artist2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Artist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
