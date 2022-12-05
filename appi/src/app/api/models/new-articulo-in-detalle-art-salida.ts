/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Articulo, 'id'>, 'detalleArtSalidaId'>, schemaOptions: { title: 'NewArticuloInDetalleArtSalida', exclude: [ 'id' ], optional: [ 'detalleArtSalidaId' ] })
 */
export interface NewArticuloInDetalleArtSalida {
  cant_art: number;
  color: string;
  costo: number;
  descripcion: string;
  detArtEntradaId?: string;
  detalleArtSalidaId?: string;
  id_art: number;
  ingresoLoteId?: string;
  material: string;
}
