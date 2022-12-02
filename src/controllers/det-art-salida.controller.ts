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
import {DetalleArtSalida} from '../models';
import {DetalleArtSalidaRepository} from '../repositories';

export class DetArtSalidaController {
  constructor(
    @repository(DetalleArtSalidaRepository)
    public detalleArtSalidaRepository : DetalleArtSalidaRepository,
  ) {}

  @post('/detalle-art-salidas')
  @response(200, {
    description: 'DetalleArtSalida model instance',
    content: {'application/json': {schema: getModelSchemaRef(DetalleArtSalida)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleArtSalida, {
            title: 'NewDetalleArtSalida',
            exclude: ['id'],
          }),
        },
      },
    })
    detalleArtSalida: Omit<DetalleArtSalida, 'id'>,
  ): Promise<DetalleArtSalida> {
    return this.detalleArtSalidaRepository.create(detalleArtSalida);
  }

  @get('/detalle-art-salidas/count')
  @response(200, {
    description: 'DetalleArtSalida model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DetalleArtSalida) where?: Where<DetalleArtSalida>,
  ): Promise<Count> {
    return this.detalleArtSalidaRepository.count(where);
  }

  @get('/detalle-art-salidas')
  @response(200, {
    description: 'Array of DetalleArtSalida model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DetalleArtSalida, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DetalleArtSalida) filter?: Filter<DetalleArtSalida>,
  ): Promise<DetalleArtSalida[]> {
    return this.detalleArtSalidaRepository.find(filter);
  }

  @patch('/detalle-art-salidas')
  @response(200, {
    description: 'DetalleArtSalida PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleArtSalida, {partial: true}),
        },
      },
    })
    detalleArtSalida: DetalleArtSalida,
    @param.where(DetalleArtSalida) where?: Where<DetalleArtSalida>,
  ): Promise<Count> {
    return this.detalleArtSalidaRepository.updateAll(detalleArtSalida, where);
  }

  @get('/detalle-art-salidas/{id}')
  @response(200, {
    description: 'DetalleArtSalida model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DetalleArtSalida, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DetalleArtSalida, {exclude: 'where'}) filter?: FilterExcludingWhere<DetalleArtSalida>
  ): Promise<DetalleArtSalida> {
    return this.detalleArtSalidaRepository.findById(id, filter);
  }

  @patch('/detalle-art-salidas/{id}')
  @response(204, {
    description: 'DetalleArtSalida PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleArtSalida, {partial: true}),
        },
      },
    })
    detalleArtSalida: DetalleArtSalida,
  ): Promise<void> {
    await this.detalleArtSalidaRepository.updateById(id, detalleArtSalida);
  }

  @put('/detalle-art-salidas/{id}')
  @response(204, {
    description: 'DetalleArtSalida PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() detalleArtSalida: DetalleArtSalida,
  ): Promise<void> {
    await this.detalleArtSalidaRepository.replaceById(id, detalleArtSalida);
  }

  @del('/detalle-art-salidas/{id}')
  @response(204, {
    description: 'DetalleArtSalida DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.detalleArtSalidaRepository.deleteById(id);
  }
}
