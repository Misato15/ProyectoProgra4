import {Entity, model, property, hasMany} from '@loopback/repository';
import {Articulo} from './articulo.model';
import {Categoria} from './categoria.model';
import {Salida} from './salida.model';

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

  @property({
    type: 'string',
  })
  detArtEntradaId?: string;

  @hasMany(() => Articulo)
  articulos: Articulo[];

  @hasMany(() => Categoria)
  categorias: Categoria[];

  @hasMany(() => Salida)
  salidas: Salida[];

  @property({
    type: 'string',
  })
  usuarioId?: string;

  constructor(data?: Partial<IngresoLote>) {
    super(data);
  }
}

export interface IngresoLoteRelations {
  // describe navigational properties here
}

export type IngresoLoteWithRelations = IngresoLote & IngresoLoteRelations;
