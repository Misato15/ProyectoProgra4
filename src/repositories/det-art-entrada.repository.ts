import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {DetArtEntrada, DetArtEntradaRelations, IngresoLote, Articulo, Movimiento} from '../models';
import {IngresoLoteRepository} from './ingreso-lote.repository';
import {ArticuloRepository} from './articulo.repository';
import {MovimientoRepository} from './movimiento.repository';

export class DetArtEntradaRepository extends DefaultCrudRepository<
  DetArtEntrada,
  typeof DetArtEntrada.prototype.id,
  DetArtEntradaRelations
> {

  public readonly ingresoLotes: HasManyRepositoryFactory<IngresoLote, typeof DetArtEntrada.prototype.id>;

  public readonly articulos: HasManyRepositoryFactory<Articulo, typeof DetArtEntrada.prototype.id>;

  public readonly movimientos: HasManyRepositoryFactory<Movimiento, typeof DetArtEntrada.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('IngresoLoteRepository') protected ingresoLoteRepositoryGetter: Getter<IngresoLoteRepository>, @repository.getter('ArticuloRepository') protected articuloRepositoryGetter: Getter<ArticuloRepository>, @repository.getter('MovimientoRepository') protected movimientoRepositoryGetter: Getter<MovimientoRepository>,
  ) {
    super(DetArtEntrada, dataSource);
    this.movimientos = this.createHasManyRepositoryFactoryFor('movimientos', movimientoRepositoryGetter,);
    this.registerInclusionResolver('movimientos', this.movimientos.inclusionResolver);
    this.articulos = this.createHasManyRepositoryFactoryFor('articulos', articuloRepositoryGetter,);
    this.registerInclusionResolver('articulos', this.articulos.inclusionResolver);
    this.ingresoLotes = this.createHasManyRepositoryFactoryFor('ingresoLotes', ingresoLoteRepositoryGetter,);
    this.registerInclusionResolver('ingresoLotes', this.ingresoLotes.inclusionResolver);
  }
}
