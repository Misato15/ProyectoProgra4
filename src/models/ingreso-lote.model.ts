import {Entity, model, property} from '@loopback/repository';

@model()
export class IngresoLote extends Entity {
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
    type: 'date',
    required: true,
  })
  fecha_ingreso: string;

  @property({
    type: 'number',
    required: true,
  })
  num_articulo: number;

  @property({
    type: 'number',
    required: true,
  })
  id_articulo: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  costo_total: number;

  @property({
    type: 'string',
    required: true,
  })
  descript: string;


  constructor(data?: Partial<IngresoLote>) {
    super(data);
  }
}

export interface IngresoLoteRelations {
  // describe navigational properties here
}

export type IngresoLoteWithRelations = IngresoLote & IngresoLoteRelations;
