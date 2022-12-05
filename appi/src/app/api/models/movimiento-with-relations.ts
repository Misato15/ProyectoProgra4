/* tslint:disable */
/* eslint-disable */
import { DetArtEntradaWithRelations } from './det-art-entrada-with-relations';

/**
 * (tsType: MovimientoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface MovimientoWithRelations {
  cantidad: number;
  detArtEntradaId?: string;
  detArtEntradas?: Array<DetArtEntradaWithRelations>;
  id?: string;
  id_art: number;
  id_lot: number;
}
