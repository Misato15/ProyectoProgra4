import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Movimiento, MovimientoRelations, DetArtEntrada} from '../models';
import {DetArtEntradaRepository} from './det-art-entrada.repository';

export class MovimientoRepository extends DefaultCrudRepository<
  Movimiento,
  typeof Movimiento.prototype.id,
  MovimientoRelations
> {

  public readonly detArtEntradas: HasManyRepositoryFactory<DetArtEntrada, typeof Movimiento.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('DetArtEntradaRepository') protected detArtEntradaRepositoryGetter: Getter<DetArtEntradaRepository>,
  ) {
    super(Movimiento, dataSource);
    this.detArtEntradas = this.createHasManyRepositoryFactoryFor('detArtEntradas', detArtEntradaRepositoryGetter,);
    this.registerInclusionResolver('detArtEntradas', this.detArtEntradas.inclusionResolver);
  }
}
