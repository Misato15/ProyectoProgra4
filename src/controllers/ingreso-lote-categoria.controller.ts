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
  Categoria,
} from '../models';
import {IngresoLoteRepository} from '../repositories';

export class IngresoLoteCategoriaController {
  constructor(
    @repository(IngresoLoteRepository) protected ingresoLoteRepository: IngresoLoteRepository,
  ) { }

  @get('/ingreso-lotes/{id}/categorias', {
    responses: {
      '200': {
        description: 'Array of IngresoLote has many Categoria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Categoria)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Categoria>,
  ): Promise<Categoria[]> {
    return this.ingresoLoteRepository.categorias(id).find(filter);
  }

  @post('/ingreso-lotes/{id}/categorias', {
    responses: {
      '200': {
        description: 'IngresoLote model instance',
        content: {'application/json': {schema: getModelSchemaRef(Categoria)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof IngresoLote.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categoria, {
            title: 'NewCategoriaInIngresoLote',
            exclude: ['id'],
            optional: ['ingresoLoteId']
          }),
        },
      },
    }) categoria: Omit<Categoria, 'id'>,
  ): Promise<Categoria> {
    return this.ingresoLoteRepository.categorias(id).create(categoria);
  }

  @patch('/ingreso-lotes/{id}/categorias', {
    responses: {
      '200': {
        description: 'IngresoLote.Categoria PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categoria, {partial: true}),
        },
      },
    })
    categoria: Partial<Categoria>,
    @param.query.object('where', getWhereSchemaFor(Categoria)) where?: Where<Categoria>,
  ): Promise<Count> {
    return this.ingresoLoteRepository.categorias(id).patch(categoria, where);
  }

  @del('/ingreso-lotes/{id}/categorias', {
    responses: {
      '200': {
        description: 'IngresoLote.Categoria DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Categoria)) where?: Where<Categoria>,
  ): Promise<Count> {
    return this.ingresoLoteRepository.categorias(id).delete(where);
  }
}
