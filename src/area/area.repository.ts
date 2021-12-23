import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Area } from './area.entity';
import { Branch } from 'src/branch/branch.entity';
import { CreateAreaDto } from './dto/create-area.dto';

@EntityRepository(Area)
export class AreaRepository extends Repository<Area> {
  async createArea(
    branch: Branch,
    createAreaDto: CreateAreaDto,
  ): Promise<Area> {
    const { name, status } = createAreaDto;
    const area = this.create({
      name,
      status,
      branch,
    });
    try {
      await this.save(area);
    } catch (error) {
      if (error.errno === 1062) {
        throw new ConflictException('Email already registered');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return area;
  }
  //   async getBranch(company: Company): Promise<Branch[]> {
  //     // const { status, search } = filterDto;

  //     const query = this.createQueryBuilder('company');
  //     query.where({ company });

  //     // if (status) {
  //     //   query.andWhere('task.status = :status', { status });
  //     // }

  //     // if (search) {
  //     //   query.andWhere(
  //     //     '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))',
  //     //     { search: `%${search}%` },
  //     //   );
  //     // }

  //     try {
  //       const branches = await query.getMany();
  //       return branches;
  //     } catch (error) {
  //       // this.logger.error(
  //       //   `Failed to get tasks for user "${
  //       //     user.username
  //       //   }". Filters: ${JSON.stringify(filterDto)}`,
  //       //   error.stack,
  //       // );
  //       throw new InternalServerErrorException();
  //     }
  //   }
}
