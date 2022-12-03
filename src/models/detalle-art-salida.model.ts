import {Entity, model, property, hasMany} from '@loopback/repository';
import {Articulo} from './articulo.model';
import {Salida} from './salida.model';

@model()
export class DetalleArtSalida extends Entity {
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
  id_oc: number;

  @property({
    type: 'number',
    required: true,
  })
  id_art: number;

  @property({
    type: 'number',
    required: true,
  })
  precioV: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'boolean',
    required: true,
  })
  autorizacion: boolean;

  @hasMany(() => Articulo)
  articulos: Articulo[];

  @hasMany(() => Salida)
  salidas: Salida[];

  constructor(data?: Partial<DetalleArtSalida>) {
    super(data);
  }
}

export interface DetalleArtSalidaRelations {
  // describe navigational properties here
}

export type DetalleArtSalidaWithRelations = DetalleArtSalida & DetalleArtSalidaRelations;
