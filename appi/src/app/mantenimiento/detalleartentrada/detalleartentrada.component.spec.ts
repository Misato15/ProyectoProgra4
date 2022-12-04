import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleartentradaComponent } from './detalleartentrada.component';

describe('DetalleartentradaComponent', () => {
  let component: DetalleartentradaComponent;
  let fixture: ComponentFixture<DetalleartentradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleartentradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleartentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
