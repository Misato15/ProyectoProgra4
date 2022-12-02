import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Movimiento, MovimientoRelations} from '../models';

export class MovimientoRepository extends DefaultCrudRepository<
  Movimiento,
  typeof Movimiento.prototype.id,
  MovimientoRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Movimiento, dataSource);
  }
}
