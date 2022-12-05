/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<IngresoLote, 'id'>, 'usuarioId'>, schemaOptions: { title: 'NewIngresoLoteInUsuario', exclude: [ 'id' ], optional: [ 'usuarioId' ] })
 */
export interface NewIngresoLoteInUsuario {
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
