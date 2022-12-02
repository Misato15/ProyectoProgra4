import {Entity, model, property} from '@loopback/repository';

@model()
export class Salida extends Entity {
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
  id_art: number;

  @property({
    type: 'number',
    required: true,
  })
  id_lot: number;

  @property({
    type: 'number',
    required: true,
  })
  cant_t: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha_s: string;

  @property({
    type: 'number',
    required: true,
  })
  valor_t: number;

  @property({
    type: 'boolean',
    required: true,
  })
  autorizacion: boolean;


  constructor(data?: Partial<Salida>) {
    super(data);
  }
}

export interface SalidaRelations {
  // describe navigational properties here
}

export type SalidaWithRelations = Salida & SalidaRelations;
