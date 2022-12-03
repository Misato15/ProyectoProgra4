import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {DetalleArtSalida, DetalleArtSalidaRelations, Articulo, Salida} from '../models';
import {ArticuloRepository} from './articulo.repository';
import {SalidaRepository} from './salida.repository';

export class DetalleArtSalidaRepository extends DefaultCrudRepository<
  DetalleArtSalida,
  typeof DetalleArtSalida.prototype.id,
  DetalleArtSalidaRelations
> {

  public readonly articulos: HasManyRepositoryFactory<Articulo, typeof DetalleArtSalida.prototype.id>;

  public readonly salidas: HasManyRepositoryFactory<Salida, typeof DetalleArtSalida.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('ArticuloRepository') protected articuloRepositoryGetter: Getter<ArticuloRepository>, @repository.getter('SalidaRepository') protected salidaRepositoryGetter: Getter<SalidaRepository>,
  ) {
    super(DetalleArtSalida, dataSource);
    this.salidas = this.createHasManyRepositoryFactoryFor('salidas', salidaRepositoryGetter,);
    this.registerInclusionResolver('salidas', this.salidas.inclusionResolver);
    this.articulos = this.createHasManyRepositoryFactoryFor('articulos', articuloRepositoryGetter,);
    this.registerInclusionResolver('articulos', this.articulos.inclusionResolver);
  }
}
