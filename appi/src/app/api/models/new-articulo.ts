/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Articulo, 'id'>, schemaOptions: { title: 'NewArticulo', exclude: [ 'id' ] })
 */
export interface NewArticulo {
  cant_art: number;
  color: string;
  costo: number;
  descripcion: string;
  detArtEntradaId?: string;
  detalleArtSalidaId?: string;
  id_art: number;
  ingresoLoteId?: string;
  material: string;
}
