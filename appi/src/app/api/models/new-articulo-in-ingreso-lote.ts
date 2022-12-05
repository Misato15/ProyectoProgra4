/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Articulo, 'id'>, 'ingresoLoteId'>, schemaOptions: { title: 'NewArticuloInIngresoLote', exclude: [ 'id' ], optional: [ 'ingresoLoteId' ] })
 */
export interface NewArticuloInIngresoLote {
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
