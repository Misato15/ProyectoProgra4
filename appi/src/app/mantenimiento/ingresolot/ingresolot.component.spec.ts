import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresolotComponent } from './ingresolot.component';

describe('IngresolotComponent', () => {
  let component: IngresolotComponent;
  let fixture: ComponentFixture<IngresolotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresolotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresolotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
