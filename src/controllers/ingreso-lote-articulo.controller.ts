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
  Articulo,
} from '../models';
import {IngresoLoteRepository} from '../repositories';

export class IngresoLoteArticuloController {
  constructor(
    @repository(IngresoLoteRepository) protected ingresoLoteRepository: IngresoLoteRepository,
  ) { }

  @get('/ingreso-lotes/{id}/articulos', {
    responses: {
      '200': {
        description: 'Array of IngresoLote has many Articulo',
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
    return this.ingresoLoteRepository.articulos(id).find(filter);
  }

  @post('/ingreso-lotes/{id}/articulos', {
    responses: {
      '200': {
        description: 'IngresoLote model instance',
        content: {'application/json': {schema: getModelSchemaRef(Articulo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof IngresoLote.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {
            title: 'NewArticuloInIngresoLote',
            exclude: ['id'],
            optional: ['ingresoLoteId']
          }),
        },
      },
    }) articulo: Omit<Articulo, 'id'>,
  ): Promise<Articulo> {
    return this.ingresoLoteRepository.articulos(id).create(articulo);
  }

  @patch('/ingreso-lotes/{id}/articulos', {
    responses: {
      '200': {
        description: 'IngresoLote.Articulo PATCH success count',
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
    return this.ingresoLoteRepository.articulos(id).patch(articulo, where);
  }

  @del('/ingreso-lotes/{id}/articulos', {
    responses: {
      '200': {
        description: 'IngresoLote.Articulo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Articulo)) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.ingresoLoteRepository.articulos(id).delete(where);
  }
}
