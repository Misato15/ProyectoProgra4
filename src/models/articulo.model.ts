import {Entity, model, property} from '@loopback/repository';

@model()
export class Articulo extends Entity {
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
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  cant_art: number;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  material: string;

  @property({
    type: 'number',
    required: true,
  })
  costo: number;

  @property({
    type: 'string',
  })
  detArtEntradaId?: string;

  @property({
    type: 'string',
  })
  detalleArtSalidaId?: string;

  @property({
    type: 'string',
  })
  ingresoLoteId?: string;

  constructor(data?: Partial<Articulo>) {
    super(data);
  }
}

export interface ArticuloRelations {
  // describe navigational properties here
}

export type ArticuloWithRelations = Articulo & ArticuloRelations;
