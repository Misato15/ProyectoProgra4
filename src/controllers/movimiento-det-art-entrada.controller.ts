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
  Movimiento,
  DetArtEntrada,
} from '../models';
import {MovimientoRepository} from '../repositories';

export class MovimientoDetArtEntradaController {
  constructor(
    @repository(MovimientoRepository) protected movimientoRepository: MovimientoRepository,
  ) { }

  @get('/movimientos/{id}/det-art-entradas', {
    responses: {
      '200': {
        description: 'Array of Movimiento has many DetArtEntrada',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DetArtEntrada)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<DetArtEntrada>,
  ): Promise<DetArtEntrada[]> {
    return this.movimientoRepository.detArtEntradas(id).find(filter);
  }

  @post('/movimientos/{id}/det-art-entradas', {
    responses: {
      '200': {
        description: 'Movimiento model instance',
        content: {'application/json': {schema: getModelSchemaRef(DetArtEntrada)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Movimiento.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetArtEntrada, {
            title: 'NewDetArtEntradaInMovimiento',
            exclude: ['id'],
            optional: ['movimientoId']
          }),
        },
      },
    }) detArtEntrada: Omit<DetArtEntrada, 'id'>,
  ): Promise<DetArtEntrada> {
    return this.movimientoRepository.detArtEntradas(id).create(detArtEntrada);
  }

  @patch('/movimientos/{id}/det-art-entradas', {
    responses: {
      '200': {
        description: 'Movimiento.DetArtEntrada PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetArtEntrada, {partial: true}),
        },
      },
    })
    detArtEntrada: Partial<DetArtEntrada>,
    @param.query.object('where', getWhereSchemaFor(DetArtEntrada)) where?: Where<DetArtEntrada>,
  ): Promise<Count> {
    return this.movimientoRepository.detArtEntradas(id).patch(detArtEntrada, where);
  }

  @del('/movimientos/{id}/det-art-entradas', {
    responses: {
      '200': {
        description: 'Movimiento.DetArtEntrada DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(DetArtEntrada)) where?: Where<DetArtEntrada>,
  ): Promise<Count> {
    return this.movimientoRepository.detArtEntradas(id).delete(where);
  }
}
