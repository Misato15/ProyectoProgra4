/* tslint:disable */
/* eslint-disable */
import { ArticuloWithRelations } from './articulo-with-relations';
import { IngresoLoteWithRelations } from './ingreso-lote-with-relations';
import { MovimientoWithRelations } from './movimiento-with-relations';

/**
 * (tsType: DetArtEntradaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface DetArtEntradaWithRelations {
  articulos?: Array<ArticuloWithRelations>;
  cantidad: number;
  cost_unitario: number;
  id?: string;
  id_art: number;
  id_lot: number;
  ingresoLotes?: Array<IngresoLoteWithRelations>;
  movimientoId?: string;
  movimientos?: Array<MovimientoWithRelations>;
}
