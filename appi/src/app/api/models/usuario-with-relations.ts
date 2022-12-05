/* tslint:disable */
/* eslint-disable */
import { IngresoLoteWithRelations } from './ingreso-lote-with-relations';

/**
 * (tsType: UsuarioWithRelations, schemaOptions: { includeRelations: true })
 */
export interface UsuarioWithRelations {
  id?: string;
  ingresoLotes?: Array<IngresoLoteWithRelations>;
  nivel_acc: number;
  nombre: string;
}
