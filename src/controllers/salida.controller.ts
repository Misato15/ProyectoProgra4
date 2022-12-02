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
import {Salida} from '../models';
import {SalidaRepository} from '../repositories';

export class SalidaController {
  constructor(
    @repository(SalidaRepository)
    public salidaRepository : SalidaRepository,
  ) {}

  @post('/salidas')
  @response(200, {
    description: 'Salida model instance',
    content: {'application/json': {schema: getModelSchemaRef(Salida)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Salida, {
            title: 'NewSalida',
            exclude: ['id'],
          }),
        },
      },
    })
    salida: Omit<Salida, 'id'>,
  ): Promise<Salida> {
    return this.salidaRepository.create(salida);
  }

  @get('/salidas/count')
  @response(200, {
    description: 'Salida model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Salida) where?: Where<Salida>,
  ): Promise<Count> {
    return this.salidaRepository.count(where);
  }

  @get('/salidas')
  @response(200, {
    description: 'Array of Salida model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Salida, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Salida) filter?: Filter<Salida>,
  ): Promise<Salida[]> {
    return this.salidaRepository.find(filter);
  }

  @patch('/salidas')
  @response(200, {
    description: 'Salida PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Salida, {partial: true}),
        },
      },
    })
    salida: Salida,
    @param.where(Salida) where?: Where<Salida>,
  ): Promise<Count> {
    return this.salidaRepository.updateAll(salida, where);
  }

  @get('/salidas/{id}')
  @response(200, {
    description: 'Salida model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Salida, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Salida, {exclude: 'where'}) filter?: FilterExcludingWhere<Salida>
  ): Promise<Salida> {
    return this.salidaRepository.findById(id, filter);
  }

  @patch('/salidas/{id}')
  @response(204, {
    description: 'Salida PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Salida, {partial: true}),
        },
      },
    })
    salida: Salida,
  ): Promise<void> {
    await this.salidaRepository.updateById(id, salida);
  }

  @put('/salidas/{id}')
  @response(204, {
    description: 'Salida PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() salida: Salida,
  ): Promise<void> {
    await this.salidaRepository.replaceById(id, salida);
  }

  @del('/salidas/{id}')
  @response(204, {
    description: 'Salida DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.salidaRepository.deleteById(id);
  }
}
