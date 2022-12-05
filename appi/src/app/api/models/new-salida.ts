/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Salida, 'id'>, schemaOptions: { title: 'NewSalida', exclude: [ 'id' ] })
 */
export interface NewSalida {
  autorizacion: boolean;
  cant_t: number;
  detalleArtSalidaId?: string;
  fecha_s: string;
  id_art: number;
  id_lot: number;
  ingresoLoteId?: string;
  valor_t: number;
}
