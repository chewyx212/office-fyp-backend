import { Area } from './../entity/area.entity';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Area)
export class AreaRepository extends Repository<Area> {}
