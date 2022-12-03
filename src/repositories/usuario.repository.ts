import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Usuario, UsuarioRelations, IngresoLote} from '../models';
import {IngresoLoteRepository} from './ingreso-lote.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {

  public readonly ingresoLotes: HasManyRepositoryFactory<IngresoLote, typeof Usuario.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('IngresoLoteRepository') protected ingresoLoteRepositoryGetter: Getter<IngresoLoteRepository>,
  ) {
    super(Usuario, dataSource);
    this.ingresoLotes = this.createHasManyRepositoryFactoryFor('ingresoLotes', ingresoLoteRepositoryGetter,);
    this.registerInclusionResolver('ingresoLotes', this.ingresoLotes.inclusionResolver);
  }
}
