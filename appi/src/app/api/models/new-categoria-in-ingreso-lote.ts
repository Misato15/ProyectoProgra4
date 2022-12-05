/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Categoria, 'id'>, 'ingresoLoteId'>, schemaOptions: { title: 'NewCategoriaInIngresoLote', exclude: [ 'id' ], optional: [ 'ingresoLoteId' ] })
 */
export interface NewCategoriaInIngresoLote {
  descripcion: string;
  industria: string;
  ingresoLoteId?: string;
  nombre: string;
}
