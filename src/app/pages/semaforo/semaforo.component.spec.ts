import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaforoComponent } from './semaforo.component';

describe('SemaforoComponent', () => {
  let component: SemaforoComponent;
  let fixture: ComponentFixture<SemaforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemaforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemaforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
