import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Salida, SalidaRelations} from '../models';

export class SalidaRepository extends DefaultCrudRepository<
  Salida,
  typeof Salida.prototype.id,
  SalidaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Salida, dataSource);
  }
}
