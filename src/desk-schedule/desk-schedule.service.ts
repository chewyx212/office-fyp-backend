import { Injectable } from '@nestjs/common';
import { CreateDeskScheduleDto } from './dto/create-desk-schedule.dto';
import { UpdateDeskScheduleDto } from './dto/update-desk-schedule.dto';

@Injectable()
export class DeskScheduleService {
  create(createDeskScheduleDto: CreateDeskScheduleDto) {
    return 'This action adds a new deskSchedule';
  }

  findAll() {
    return `This action returns all deskSchedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deskSchedule`;
  }

  update(id: number, updateDeskScheduleDto: UpdateDeskScheduleDto) {
    return `This action updates a #${id} deskSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} deskSchedule`;
  }
}
