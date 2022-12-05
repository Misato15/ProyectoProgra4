/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Salida, 'id'>, 'detalleArtSalidaId'>, schemaOptions: { title: 'NewSalidaInDetalleArtSalida', exclude: [ 'id' ], optional: [ 'detalleArtSalidaId' ] })
 */
export interface NewSalidaInDetalleArtSalida {
  autorizacion: boolean;
  cant_t: number;
  detalleArtSalidaId?: string;
  fecha_s: string;
  id_art: number;
  id_lot: number;
  ingresoLoteId?: string;
  valor_t: number;
}
