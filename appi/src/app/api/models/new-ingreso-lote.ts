/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<IngresoLote, 'id'>, schemaOptions: { title: 'NewIngresoLote', exclude: [ 'id' ] })
 */
export interface NewIngresoLote {
  cantidad: number;
  costo_total: number;
  descripcion: string;
  descript: string;
  detArtEntradaId?: string;
  fecha_ingreso: string;
  id_articulo: number;
  id_lot: number;
  num_articulo: number;
  usuarioId?: string;
}
