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
  Articulo,
} from '../models';
import {DetArtEntradaRepository} from '../repositories';

export class DetArtEntradaArticuloController {
  constructor(
    @repository(DetArtEntradaRepository) protected detArtEntradaRepository: DetArtEntradaRepository,
  ) { }

  @get('/det-art-entradas/{id}/articulos', {
    responses: {
      '200': {
        description: 'Array of DetArtEntrada has many Articulo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Articulo)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Articulo>,
  ): Promise<Articulo[]> {
    return this.detArtEntradaRepository.articulos(id).find(filter);
  }

  @post('/det-art-entradas/{id}/articulos', {
    responses: {
      '200': {
        description: 'DetArtEntrada model instance',
        content: {'application/json': {schema: getModelSchemaRef(Articulo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DetArtEntrada.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {
            title: 'NewArticuloInDetArtEntrada',
            exclude: ['id'],
            optional: ['detArtEntradaId']
          }),
        },
      },
    }) articulo: Omit<Articulo, 'id'>,
  ): Promise<Articulo> {
    return this.detArtEntradaRepository.articulos(id).create(articulo);
  }

  @patch('/det-art-entradas/{id}/articulos', {
    responses: {
      '200': {
        description: 'DetArtEntrada.Articulo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {partial: true}),
        },
      },
    })
    articulo: Partial<Articulo>,
    @param.query.object('where', getWhereSchemaFor(Articulo)) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.detArtEntradaRepository.articulos(id).patch(articulo, where);
  }

  @del('/det-art-entradas/{id}/articulos', {
    responses: {
      '200': {
        description: 'DetArtEntrada.Articulo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Articulo)) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.detArtEntradaRepository.articulos(id).delete(where);
  }
}
