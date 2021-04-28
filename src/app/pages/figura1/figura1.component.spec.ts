import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figura1Component } from './figura1.component';

describe('Figura1Component', () => {
  let component: Figura1Component;
  let fixture: ComponentFixture<Figura1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Figura1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Figura1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
