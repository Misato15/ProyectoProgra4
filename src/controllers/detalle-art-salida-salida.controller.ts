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
  DetalleArtSalida,
  Salida,
} from '../models';
import {DetalleArtSalidaRepository} from '../repositories';

export class DetalleArtSalidaSalidaController {
  constructor(
    @repository(DetalleArtSalidaRepository) protected detalleArtSalidaRepository: DetalleArtSalidaRepository,
  ) { }

  @get('/detalle-art-salidas/{id}/salidas', {
    responses: {
      '200': {
        description: 'Array of DetalleArtSalida has many Salida',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Salida)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Salida>,
  ): Promise<Salida[]> {
    return this.detalleArtSalidaRepository.salidas(id).find(filter);
  }

  @post('/detalle-art-salidas/{id}/salidas', {
    responses: {
      '200': {
        description: 'DetalleArtSalida model instance',
        content: {'application/json': {schema: getModelSchemaRef(Salida)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DetalleArtSalida.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Salida, {
            title: 'NewSalidaInDetalleArtSalida',
            exclude: ['id'],
            optional: ['detalleArtSalidaId']
          }),
        },
      },
    }) salida: Omit<Salida, 'id'>,
  ): Promise<Salida> {
    return this.detalleArtSalidaRepository.salidas(id).create(salida);
  }

  @patch('/detalle-art-salidas/{id}/salidas', {
    responses: {
      '200': {
        description: 'DetalleArtSalida.Salida PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Salida, {partial: true}),
        },
      },
    })
    salida: Partial<Salida>,
    @param.query.object('where', getWhereSchemaFor(Salida)) where?: Where<Salida>,
  ): Promise<Count> {
    return this.detalleArtSalidaRepository.salidas(id).patch(salida, where);
  }

  @del('/detalle-art-salidas/{id}/salidas', {
    responses: {
      '200': {
        description: 'DetalleArtSalida.Salida DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Salida)) where?: Where<Salida>,
  ): Promise<Count> {
    return this.detalleArtSalidaRepository.salidas(id).delete(where);
  }
}
