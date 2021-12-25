import { CreateDeskScheduleDto } from './dto/create-desk-schedule.dto';
import { DeskSchedule } from './desk-schedule.entity';
import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from 'src/auth/user.entity';

@EntityRepository(DeskSchedule)
export class DeskScheduleRepository extends Repository<DeskSchedule> {
  async createDeskSchedule(
    user: User,
    createDeskScheduleDto: CreateDeskScheduleDto,
  ) {
    // const { data } = createDeskScheduleDto;
    // const deskSchedule = this.create({
    //   name,
    //   detail,
    //   status,
    //   branch,
    // });
    // try {
    //   await this.save(deskSchedule);
    // } catch (error) {
    //   if (error.errno === 1062) {
    //     throw new ConflictException('already registered');
    //   } else {
    //     throw new InternalServerErrorException();
    //   }
    // }
    // return room;
  }
}
