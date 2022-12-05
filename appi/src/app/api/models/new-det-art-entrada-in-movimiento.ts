/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<DetArtEntrada, 'id'>, 'movimientoId'>, schemaOptions: { title: 'NewDetArtEntradaInMovimiento', exclude: [ 'id' ], optional: [ 'movimientoId' ] })
 */
export interface NewDetArtEntradaInMovimiento {
  cantidad: number;
  cost_unitario: number;
  id_art: number;
  id_lot: number;
  movimientoId?: string;
}
