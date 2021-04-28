import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figura2Component } from './figura2.component';

describe('Figura2Component', () => {
  let component: Figura2Component;
  let fixture: ComponentFixture<Figura2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Figura2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Figura2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
