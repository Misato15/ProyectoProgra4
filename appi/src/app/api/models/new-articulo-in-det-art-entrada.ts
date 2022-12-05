/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Articulo, 'id'>, 'detArtEntradaId'>, schemaOptions: { title: 'NewArticuloInDetArtEntrada', exclude: [ 'id' ], optional: [ 'detArtEntradaId' ] })
 */
export interface NewArticuloInDetArtEntrada {
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
