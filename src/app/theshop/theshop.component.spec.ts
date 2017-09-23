import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheshopComponent } from './theshop.component';

describe('TheshopComponent', () => {
  let component: TheshopComponent;
  let fixture: ComponentFixture<TheshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
