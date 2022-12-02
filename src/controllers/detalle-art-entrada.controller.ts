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
import {DetArtEntrada} from '../models';
import {DetArtEntradaRepository} from '../repositories';

export class DetalleArtEntradaController {
  constructor(
    @repository(DetArtEntradaRepository)
    public detArtEntradaRepository : DetArtEntradaRepository,
  ) {}

  @post('/det-art-entradas')
  @response(200, {
    description: 'DetArtEntrada model instance',
    content: {'application/json': {schema: getModelSchemaRef(DetArtEntrada)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetArtEntrada, {
            title: 'NewDetArtEntrada',
            exclude: ['id'],
          }),
        },
      },
    })
    detArtEntrada: Omit<DetArtEntrada, 'id'>,
  ): Promise<DetArtEntrada> {
    return this.detArtEntradaRepository.create(detArtEntrada);
  }

  @get('/det-art-entradas/count')
  @response(200, {
    description: 'DetArtEntrada model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DetArtEntrada) where?: Where<DetArtEntrada>,
  ): Promise<Count> {
    return this.detArtEntradaRepository.count(where);
  }

  @get('/det-art-entradas')
  @response(200, {
    description: 'Array of DetArtEntrada model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DetArtEntrada, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DetArtEntrada) filter?: Filter<DetArtEntrada>,
  ): Promise<DetArtEntrada[]> {
    return this.detArtEntradaRepository.find(filter);
  }

  @patch('/det-art-entradas')
  @response(200, {
    description: 'DetArtEntrada PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetArtEntrada, {partial: true}),
        },
      },
    })
    detArtEntrada: DetArtEntrada,
    @param.where(DetArtEntrada) where?: Where<DetArtEntrada>,
  ): Promise<Count> {
    return this.detArtEntradaRepository.updateAll(detArtEntrada, where);
  }

  @get('/det-art-entradas/{id}')
  @response(200, {
    description: 'DetArtEntrada model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DetArtEntrada, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DetArtEntrada, {exclude: 'where'}) filter?: FilterExcludingWhere<DetArtEntrada>
  ): Promise<DetArtEntrada> {
    return this.detArtEntradaRepository.findById(id, filter);
  }

  @patch('/det-art-entradas/{id}')
  @response(204, {
    description: 'DetArtEntrada PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetArtEntrada, {partial: true}),
        },
      },
    })
    detArtEntrada: DetArtEntrada,
  ): Promise<void> {
    await this.detArtEntradaRepository.updateById(id, detArtEntrada);
  }

  @put('/det-art-entradas/{id}')
  @response(204, {
    description: 'DetArtEntrada PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() detArtEntrada: DetArtEntrada,
  ): Promise<void> {
    await this.detArtEntradaRepository.replaceById(id, detArtEntrada);
  }

  @del('/det-art-entradas/{id}')
  @response(204, {
    description: 'DetArtEntrada DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.detArtEntradaRepository.deleteById(id);
  }
}
