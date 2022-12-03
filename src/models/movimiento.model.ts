import {Entity, model, property, hasMany} from '@loopback/repository';
import {DetArtEntrada} from './det-art-entrada.model';

@model()
export class Movimiento extends Entity {
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
  cantidad: number;

  @hasMany(() => DetArtEntrada)
  detArtEntradas: DetArtEntrada[];

  @property({
    type: 'string',
  })
  detArtEntradaId?: string;

  constructor(data?: Partial<Movimiento>) {
    super(data);
  }
}

export interface MovimientoRelations {
  // describe navigational properties here
}

export type MovimientoWithRelations = Movimiento & MovimientoRelations;
