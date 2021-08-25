import { Announcement } from './../entity/announcement.entity';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Announcement)
export class AnnoucementRepository extends Repository<Announcement> {}
