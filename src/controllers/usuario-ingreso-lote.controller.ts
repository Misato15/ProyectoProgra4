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
  Usuario,
  IngresoLote,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioIngresoLoteController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/ingreso-lotes', {
    responses: {
      '200': {
        description: 'Array of Usuario has many IngresoLote',
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
    return this.usuarioRepository.ingresoLotes(id).find(filter);
  }

  @post('/usuarios/{id}/ingreso-lotes', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(IngresoLote)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngresoLote, {
            title: 'NewIngresoLoteInUsuario',
            exclude: ['id'],
            optional: ['usuarioId']
          }),
        },
      },
    }) ingresoLote: Omit<IngresoLote, 'id'>,
  ): Promise<IngresoLote> {
    return this.usuarioRepository.ingresoLotes(id).create(ingresoLote);
  }

  @patch('/usuarios/{id}/ingreso-lotes', {
    responses: {
      '200': {
        description: 'Usuario.IngresoLote PATCH success count',
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
    return this.usuarioRepository.ingresoLotes(id).patch(ingresoLote, where);
  }

  @del('/usuarios/{id}/ingreso-lotes', {
    responses: {
      '200': {
        description: 'Usuario.IngresoLote DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(IngresoLote)) where?: Where<IngresoLote>,
  ): Promise<Count> {
    return this.usuarioRepository.ingresoLotes(id).delete(where);
  }
}
