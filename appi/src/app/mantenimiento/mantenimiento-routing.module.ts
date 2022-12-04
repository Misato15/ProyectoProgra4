import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { DetalleartentradaComponent } from './detalleartentrada/detalleartentrada.component';
import { DetalleartsalidaComponent } from './detalleartsalida/detalleartsalida.component';
import { IngresolotComponent } from './ingresolot/ingresolot.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { SalidaComponent } from './salida/salida.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path:'',
  children:[
    {path:'articulo',component:ArticuloComponent},
    {path:'detalleartentrada',component:DetalleartentradaComponent},
    {path:'detalleartsalida',component:DetalleartsalidaComponent},
    {path:'ingresolot',component:IngresolotComponent},
    {path:'movimiento',component:MovimientoComponent},
    {path:'salida',component:SalidaComponent},
    {path:'usuario',component:UsuarioComponent},

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
