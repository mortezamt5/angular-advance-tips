import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A22Component } from './a22.component';

describe('A22Component', () => {
  let component: A22Component;
  let fixture: ComponentFixture<A22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
