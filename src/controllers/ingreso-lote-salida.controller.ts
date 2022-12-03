import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  IngresoLote,
  Salida,
} from '../models';
import {IngresoLoteRepository} from '../repositories';

export class IngresoLoteSalidaController {
  constructor(
    @repository(IngresoLoteRepository) protected ingresoLoteRepository: IngresoLoteRepository,
  ) { }

  @get('/ingreso-lotes/{id}/salidas', {
    responses: {
      '200': {
        description: 'Array of IngresoLote has many Salida',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Salida)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Salida>,
  ): Promise<Salida[]> {
    return this.ingresoLoteRepository.salidas(id).find(filter);
  }

  @post('/ingreso-lotes/{id}/salidas', {
    responses: {
      '200': {
        description: 'IngresoLote model instance',
        content: {'application/json': {schema: getModelSchemaRef(Salida)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof IngresoLote.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Salida, {
            title: 'NewSalidaInIngresoLote',
            exclude: ['id'],
            optional: ['ingresoLoteId']
          }),
        },
      },
    }) salida: Omit<Salida, 'id'>,
  ): Promise<Salida> {
    return this.ingresoLoteRepository.salidas(id).create(salida);
  }

  @patch('/ingreso-lotes/{id}/salidas', {
    responses: {
      '200': {
        description: 'IngresoLote.Salida PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Salida, {partial: true}),
        },
      },
    })
    salida: Partial<Salida>,
    @param.query.object('where', getWhereSchemaFor(Salida)) where?: Where<Salida>,
  ): Promise<Count> {
    return this.ingresoLoteRepository.salidas(id).patch(salida, where);
  }

  @del('/ingreso-lotes/{id}/salidas', {
    responses: {
      '200': {
        description: 'IngresoLote.Salida DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Salida)) where?: Where<Salida>,
  ): Promise<Count> {
    return this.ingresoLoteRepository.salidas(id).delete(where);
  }
}
