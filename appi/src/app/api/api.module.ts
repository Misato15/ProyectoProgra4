/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ArticuloControllerService } from './services/articulo-controller.service';
import { CategoriaControllerService } from './services/categoria-controller.service';
import { DetalleArtEntradaControllerService } from './services/detalle-art-entrada-controller.service';
import { DetArtEntradaArticuloControllerService } from './services/det-art-entrada-articulo-controller.service';
import { DetArtEntradaIngresoLoteControllerService } from './services/det-art-entrada-ingreso-lote-controller.service';
import { DetArtEntradaMovimientoControllerService } from './services/det-art-entrada-movimiento-controller.service';
import { DetArtSalidaControllerService } from './services/det-art-salida-controller.service';
import { DetalleArtSalidaArticuloControllerService } from './services/detalle-art-salida-articulo-controller.service';
import { DetalleArtSalidaSalidaControllerService } from './services/detalle-art-salida-salida-controller.service';
import { IngresoLoteControllerService } from './services/ingreso-lote-controller.service';
import { IngresoLoteArticuloControllerService } from './services/ingreso-lote-articulo-controller.service';
import { IngresoLoteCategoriaControllerService } from './services/ingreso-lote-categoria-controller.service';
import { IngresoLoteSalidaControllerService } from './services/ingreso-lote-salida-controller.service';
import { MovimientoControllerService } from './services/movimiento-controller.service';
import { MovimientoDetArtEntradaControllerService } from './services/movimiento-det-art-entrada-controller.service';
import { SalidaControllerService } from './services/salida-controller.service';
import { UsuarioControllerService } from './services/usuario-controller.service';
import { UsuarioIngresoLoteControllerService } from './services/usuario-ingreso-lote-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ArticuloControllerService,
    CategoriaControllerService,
    DetalleArtEntradaControllerService,
    DetArtEntradaArticuloControllerService,
    DetArtEntradaIngresoLoteControllerService,
    DetArtEntradaMovimientoControllerService,
    DetArtSalidaControllerService,
    DetalleArtSalidaArticuloControllerService,
    DetalleArtSalidaSalidaControllerService,
    IngresoLoteControllerService,
    IngresoLoteArticuloControllerService,
    IngresoLoteCategoriaControllerService,
    IngresoLoteSalidaControllerService,
    MovimientoControllerService,
    MovimientoDetArtEntradaControllerService,
    SalidaControllerService,
    UsuarioControllerService,
    UsuarioIngresoLoteControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
