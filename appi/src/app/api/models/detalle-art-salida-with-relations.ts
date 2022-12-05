/* tslint:disable */
/* eslint-disable */
import { ArticuloWithRelations } from './articulo-with-relations';
import { SalidaWithRelations } from './salida-with-relations';

/**
 * (tsType: DetalleArtSalidaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface DetalleArtSalidaWithRelations {
  articulos?: Array<ArticuloWithRelations>;
  autorizacion: boolean;
  cantidad: number;
  id?: string;
  id_art: number;
  id_oc: number;
  precioV: number;
  salidas?: Array<SalidaWithRelations>;
}
