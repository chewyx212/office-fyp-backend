import { Organization } from '../entity/organization.entity';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Organization)
export class OrganizationRepository extends Repository<Organization> {}
