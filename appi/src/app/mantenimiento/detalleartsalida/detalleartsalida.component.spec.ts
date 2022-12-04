import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleartsalidaComponent } from './detalleartsalida.component';

describe('DetalleartsalidaComponent', () => {
  let component: DetalleartsalidaComponent;
  let fixture: ComponentFixture<DetalleartsalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleartsalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleartsalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
