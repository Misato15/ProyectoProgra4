import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { IngresolotComponent } from './ingresolot/ingresolot.component';
import { DetalleartentradaComponent } from './detalleartentrada/detalleartentrada.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { DetalleartsalidaComponent } from './detalleartsalida/detalleartsalida.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { SalidaComponent } from './salida/salida.component';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    IngresolotComponent,
    DetalleartentradaComponent,
    MovimientoComponent,
    DetalleartsalidaComponent,
    ArticuloComponent,
    SalidaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
