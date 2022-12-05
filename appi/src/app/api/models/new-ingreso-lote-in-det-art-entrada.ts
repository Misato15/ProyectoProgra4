/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<IngresoLote, 'id'>, 'detArtEntradaId'>, schemaOptions: { title: 'NewIngresoLoteInDetArtEntrada', exclude: [ 'id' ], optional: [ 'detArtEntradaId' ] })
 */
export interface NewIngresoLoteInDetArtEntrada {
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
