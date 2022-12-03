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
  DetArtEntrada,
  Movimiento,
} from '../models';
import {DetArtEntradaRepository} from '../repositories';

export class DetArtEntradaMovimientoController {
  constructor(
    @repository(DetArtEntradaRepository) protected detArtEntradaRepository: DetArtEntradaRepository,
  ) { }

  @get('/det-art-entradas/{id}/movimientos', {
    responses: {
      '200': {
        description: 'Array of DetArtEntrada has many Movimiento',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Movimiento)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Movimiento>,
  ): Promise<Movimiento[]> {
    return this.detArtEntradaRepository.movimientos(id).find(filter);
  }

  @post('/det-art-entradas/{id}/movimientos', {
    responses: {
      '200': {
        description: 'DetArtEntrada model instance',
        content: {'application/json': {schema: getModelSchemaRef(Movimiento)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DetArtEntrada.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movimiento, {
            title: 'NewMovimientoInDetArtEntrada',
            exclude: ['id'],
            optional: ['detArtEntradaId']
          }),
        },
      },
    }) movimiento: Omit<Movimiento, 'id'>,
  ): Promise<Movimiento> {
    return this.detArtEntradaRepository.movimientos(id).create(movimiento);
  }

  @patch('/det-art-entradas/{id}/movimientos', {
    responses: {
      '200': {
        description: 'DetArtEntrada.Movimiento PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Movimiento, {partial: true}),
        },
      },
    })
    movimiento: Partial<Movimiento>,
    @param.query.object('where', getWhereSchemaFor(Movimiento)) where?: Where<Movimiento>,
  ): Promise<Count> {
    return this.detArtEntradaRepository.movimientos(id).patch(movimiento, where);
  }

  @del('/det-art-entradas/{id}/movimientos', {
    responses: {
      '200': {
        description: 'DetArtEntrada.Movimiento DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Movimiento)) where?: Where<Movimiento>,
  ): Promise<Count> {
    return this.detArtEntradaRepository.movimientos(id).delete(where);
  }
}
