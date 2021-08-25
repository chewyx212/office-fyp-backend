import { EntityRepository, Repository } from 'typeorm';
import { UserRole } from '../user.entity';

@EntityRepository(UserRole)
export class RolesRepository extends Repository<UserRole> {}
