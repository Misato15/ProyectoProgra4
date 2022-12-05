/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Movimiento, 'id'>, 'detArtEntradaId'>, schemaOptions: { title: 'NewMovimientoInDetArtEntrada', exclude: [ 'id' ], optional: [ 'detArtEntradaId' ] })
 */
export interface NewMovimientoInDetArtEntrada {
  cantidad: number;
  detArtEntradaId?: string;
  id_art: number;
  id_lot: number;
}
