import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<DetArtEntrada>) {
    super(data);
  }
}

export interface DetArtEntradaRelations {
  // describe navigational properties here
}

export type DetArtEntradaWithRelations = DetArtEntrada & DetArtEntradaRelations;
