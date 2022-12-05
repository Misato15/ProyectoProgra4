/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Categoria, 'id'>, schemaOptions: { title: 'NewCategoria', exclude: [ 'id' ] })
 */
export interface NewCategoria {
  descripcion: string;
  industria: string;
  ingresoLoteId?: string;
  nombre: string;
}
