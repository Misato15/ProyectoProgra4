import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {DetalleArtSalida, DetalleArtSalidaRelations} from '../models';

export class DetalleArtSalidaRepository extends DefaultCrudRepository<
  DetalleArtSalida,
  typeof DetalleArtSalida.prototype.id,
  DetalleArtSalidaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(DetalleArtSalida, dataSource);
  }
}
