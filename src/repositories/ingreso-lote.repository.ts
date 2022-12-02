import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {IngresoLote, IngresoLoteRelations} from '../models';

export class IngresoLoteRepository extends DefaultCrudRepository<
  IngresoLote,
  typeof IngresoLote.prototype.id,
  IngresoLoteRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(IngresoLote, dataSource);
  }
}
