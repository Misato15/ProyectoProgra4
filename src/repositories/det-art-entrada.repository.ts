import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {DetArtEntrada, DetArtEntradaRelations} from '../models';

export class DetArtEntradaRepository extends DefaultCrudRepository<
  DetArtEntrada,
  typeof DetArtEntrada.prototype.id,
  DetArtEntradaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(DetArtEntrada, dataSource);
  }
}
