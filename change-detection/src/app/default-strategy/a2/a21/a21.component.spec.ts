import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A21Component } from './a21.component';

describe('A21Component', () => {
  let component: A21Component;
  let fixture: ComponentFixture<A21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
