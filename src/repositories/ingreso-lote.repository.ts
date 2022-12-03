import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {IngresoLote, IngresoLoteRelations, Articulo, Categoria, Salida} from '../models';
import {ArticuloRepository} from './articulo.repository';
import {CategoriaRepository} from './categoria.repository';
import {SalidaRepository} from './salida.repository';

export class IngresoLoteRepository extends DefaultCrudRepository<
  IngresoLote,
  typeof IngresoLote.prototype.id,
  IngresoLoteRelations
> {

  public readonly articulos: HasManyRepositoryFactory<Articulo, typeof IngresoLote.prototype.id>;

  public readonly categorias: HasManyRepositoryFactory<Categoria, typeof IngresoLote.prototype.id>;

  public readonly salidas: HasManyRepositoryFactory<Salida, typeof IngresoLote.prototype.id>;

  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource, @repository.getter('ArticuloRepository') protected articuloRepositoryGetter: Getter<ArticuloRepository>, @repository.getter('CategoriaRepository') protected categoriaRepositoryGetter: Getter<CategoriaRepository>, @repository.getter('SalidaRepository') protected salidaRepositoryGetter: Getter<SalidaRepository>,
  ) {
    super(IngresoLote, dataSource);
    this.salidas = this.createHasManyRepositoryFactoryFor('salidas', salidaRepositoryGetter,);
    this.registerInclusionResolver('salidas', this.salidas.inclusionResolver);
    this.categorias = this.createHasManyRepositoryFactoryFor('categorias', categoriaRepositoryGetter,);
    this.registerInclusionResolver('categorias', this.categorias.inclusionResolver);
    this.articulos = this.createHasManyRepositoryFactoryFor('articulos', articuloRepositoryGetter,);
    this.registerInclusionResolver('articulos', this.articulos.inclusionResolver);
  }
}
