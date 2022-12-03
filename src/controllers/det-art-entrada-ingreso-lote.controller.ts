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
  IngresoLote,
} from '../models';
import {DetArtEntradaRepository} from '../repositories';

export class DetArtEntradaIngresoLoteController {
  constructor(
    @repository(DetArtEntradaRepository) protected detArtEntradaRepository: DetArtEntradaRepository,
  ) { }

  @get('/det-art-entradas/{id}/ingreso-lotes', {
    responses: {
      '200': {
        description: 'Array of DetArtEntrada has many IngresoLote',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(IngresoLote)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<IngresoLote>,
  ): Promise<IngresoLote[]> {
    return this.detArtEntradaRepository.ingresoLotes(id).find(filter);
  }

  @post('/det-art-entradas/{id}/ingreso-lotes', {
    responses: {
      '200': {
        description: 'DetArtEntrada model instance',
        content: {'application/json': {schema: getModelSchemaRef(IngresoLote)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DetArtEntrada.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngresoLote, {
            title: 'NewIngresoLoteInDetArtEntrada',
            exclude: ['id'],
            optional: ['detArtEntradaId']
          }),
        },
      },
    }) ingresoLote: Omit<IngresoLote, 'id'>,
  ): Promise<IngresoLote> {
    return this.detArtEntradaRepository.ingresoLotes(id).create(ingresoLote);
  }

  @patch('/det-art-entradas/{id}/ingreso-lotes', {
    responses: {
      '200': {
        description: 'DetArtEntrada.IngresoLote PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngresoLote, {partial: true}),
        },
      },
    })
    ingresoLote: Partial<IngresoLote>,
    @param.query.object('where', getWhereSchemaFor(IngresoLote)) where?: Where<IngresoLote>,
  ): Promise<Count> {
    return this.detArtEntradaRepository.ingresoLotes(id).patch(ingresoLote, where);
  }

  @del('/det-art-entradas/{id}/ingreso-lotes', {
    responses: {
      '200': {
        description: 'DetArtEntrada.IngresoLote DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(IngresoLote)) where?: Where<IngresoLote>,
  ): Promise<Count> {
    return this.detArtEntradaRepository.ingresoLotes(id).delete(where);
  }
}
