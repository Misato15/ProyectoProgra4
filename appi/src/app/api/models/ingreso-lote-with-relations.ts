/* tslint:disable */
/* eslint-disable */
import { ArticuloWithRelations } from './articulo-with-relations';
import { CategoriaWithRelations } from './categoria-with-relations';
import { SalidaWithRelations } from './salida-with-relations';

/**
 * (tsType: IngresoLoteWithRelations, schemaOptions: { includeRelations: true })
 */
export interface IngresoLoteWithRelations {
  articulos?: Array<ArticuloWithRelations>;
  cantidad: number;
  categorias?: Array<CategoriaWithRelations>;
  costo_total: number;
  descripcion: string;
  descript: string;
  detArtEntradaId?: string;
  fecha_ingreso: string;
  id?: string;
  id_articulo: number;
  id_lot: number;
  num_articulo: number;
  salidas?: Array<SalidaWithRelations>;
  usuarioId?: string;
}
