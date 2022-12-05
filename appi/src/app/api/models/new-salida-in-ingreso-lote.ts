/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Salida, 'id'>, 'ingresoLoteId'>, schemaOptions: { title: 'NewSalidaInIngresoLote', exclude: [ 'id' ], optional: [ 'ingresoLoteId' ] })
 */
export interface NewSalidaInIngresoLote {
  autorizacion: boolean;
  cant_t: number;
  detalleArtSalidaId?: string;
  fecha_s: string;
  id_art: number;
  id_lot: number;
  ingresoLoteId?: string;
  valor_t: number;
}
