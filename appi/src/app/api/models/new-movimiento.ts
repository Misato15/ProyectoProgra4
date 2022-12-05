/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Movimiento, 'id'>, schemaOptions: { title: 'NewMovimiento', exclude: [ 'id' ] })
 */
export interface NewMovimiento {
  cantidad: number;
  detArtEntradaId?: string;
  id_art: number;
  id_lot: number;
}
