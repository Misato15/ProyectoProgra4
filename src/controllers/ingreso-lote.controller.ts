import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {IngresoLote} from '../models';
import {IngresoLoteRepository} from '../repositories';

export class IngresoLoteController {
  constructor(
    @repository(IngresoLoteRepository)
    public ingresoLoteRepository : IngresoLoteRepository,
  ) {}

  @post('/ingreso-lotes')
  @response(200, {
    description: 'IngresoLote model instance',
    content: {'application/json': {schema: getModelSchemaRef(IngresoLote)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngresoLote, {
            title: 'NewIngresoLote',
            exclude: ['id'],
          }),
        },
      },
    })
    ingresoLote: Omit<IngresoLote, 'id'>,
  ): Promise<IngresoLote> {
    return this.ingresoLoteRepository.create(ingresoLote);
  }

  @get('/ingreso-lotes/count')
  @response(200, {
    description: 'IngresoLote model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(IngresoLote) where?: Where<IngresoLote>,
  ): Promise<Count> {
    return this.ingresoLoteRepository.count(where);
  }

  @get('/ingreso-lotes')
  @response(200, {
    description: 'Array of IngresoLote model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(IngresoLote, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(IngresoLote) filter?: Filter<IngresoLote>,
  ): Promise<IngresoLote[]> {
    return this.ingresoLoteRepository.find(filter);
  }

  @patch('/ingreso-lotes')
  @response(200, {
    description: 'IngresoLote PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngresoLote, {partial: true}),
        },
      },
    })
    ingresoLote: IngresoLote,
    @param.where(IngresoLote) where?: Where<IngresoLote>,
  ): Promise<Count> {
    return this.ingresoLoteRepository.updateAll(ingresoLote, where);
  }

  @get('/ingreso-lotes/{id}')
  @response(200, {
    description: 'IngresoLote model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(IngresoLote, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(IngresoLote, {exclude: 'where'}) filter?: FilterExcludingWhere<IngresoLote>
  ): Promise<IngresoLote> {
    return this.ingresoLoteRepository.findById(id, filter);
  }

  @patch('/ingreso-lotes/{id}')
  @response(204, {
    description: 'IngresoLote PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngresoLote, {partial: true}),
        },
      },
    })
    ingresoLote: IngresoLote,
  ): Promise<void> {
    await this.ingresoLoteRepository.updateById(id, ingresoLote);
  }

  @put('/ingreso-lotes/{id}')
  @response(204, {
    description: 'IngresoLote PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ingresoLote: IngresoLote,
  ): Promise<void> {
    await this.ingresoLoteRepository.replaceById(id, ingresoLote);
  }

  @del('/ingreso-lotes/{id}')
  @response(204, {
    description: 'IngresoLote DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ingresoLoteRepository.deleteById(id);
  }
}
