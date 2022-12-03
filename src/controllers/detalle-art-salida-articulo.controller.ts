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
  Articulo,
} from '../models';
import {DetalleArtSalidaRepository} from '../repositories';

export class DetalleArtSalidaArticuloController {
  constructor(
    @repository(DetalleArtSalidaRepository) protected detalleArtSalidaRepository: DetalleArtSalidaRepository,
  ) { }

  @get('/detalle-art-salidas/{id}/articulos', {
    responses: {
      '200': {
        description: 'Array of DetalleArtSalida has many Articulo',
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
    return this.detalleArtSalidaRepository.articulos(id).find(filter);
  }

  @post('/detalle-art-salidas/{id}/articulos', {
    responses: {
      '200': {
        description: 'DetalleArtSalida model instance',
        content: {'application/json': {schema: getModelSchemaRef(Articulo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DetalleArtSalida.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {
            title: 'NewArticuloInDetalleArtSalida',
            exclude: ['id'],
            optional: ['detalleArtSalidaId']
          }),
        },
      },
    }) articulo: Omit<Articulo, 'id'>,
  ): Promise<Articulo> {
    return this.detalleArtSalidaRepository.articulos(id).create(articulo);
  }

  @patch('/detalle-art-salidas/{id}/articulos', {
    responses: {
      '200': {
        description: 'DetalleArtSalida.Articulo PATCH success count',
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
    return this.detalleArtSalidaRepository.articulos(id).patch(articulo, where);
  }

  @del('/detalle-art-salidas/{id}/articulos', {
    responses: {
      '200': {
        description: 'DetalleArtSalida.Articulo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Articulo)) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.detalleArtSalidaRepository.articulos(id).delete(where);
  }
}
