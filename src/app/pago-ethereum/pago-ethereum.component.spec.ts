// Se encuentran los archivos que se ejecutan utilizando el marco de prueba Jasmine javascript a través del corredor de prueba Karma
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEthereumComponent } from './pago-ethereum.component';

describe('PagoEthereumComponent', () => {
  let component: PagoEthereumComponent;
  let fixture: ComponentFixture<PagoEthereumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoEthereumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoEthereumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
