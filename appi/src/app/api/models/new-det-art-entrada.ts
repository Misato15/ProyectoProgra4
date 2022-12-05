/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<DetArtEntrada, 'id'>, schemaOptions: { title: 'NewDetArtEntrada', exclude: [ 'id' ] })
 */
export interface NewDetArtEntrada {
  cantidad: number;
  cost_unitario: number;
  id_art: number;
  id_lot: number;
  movimientoId?: string;
}
