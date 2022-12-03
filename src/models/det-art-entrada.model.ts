import {Entity, model, property, hasMany} from '@loopback/repository';
import {IngresoLote} from './ingreso-lote.model';
import {Articulo} from './articulo.model';
import {Movimiento} from './movimiento.model';

@model()
export class DetArtEntrada extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  id_lot: number;

  @property({
    type: 'number',
    required: true,
  })
  id_art: number;

  @property({
    type: 'number',
    required: true,
  })
  cost_unitario: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @hasMany(() => IngresoLote)
  ingresoLotes: IngresoLote[];

  @hasMany(() => Articulo)
  articulos: Articulo[];

  @property({
    type: 'string',
  })
  movimientoId?: string;

  @hasMany(() => Movimiento)
  movimientos: Movimiento[];

  constructor(data?: Partial<DetArtEntrada>) {
    super(data);
  }
}

export interface DetArtEntradaRelations {
  // describe navigational properties here
}

export type DetArtEntradaWithRelations = DetArtEntrada & DetArtEntradaRelations;
