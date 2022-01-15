import { Injectable } from '@nestjs/common';
import { CreateVisitorLogDto } from './dto/create-visitor-log.dto';
import { UpdateVisitorLogDto } from './dto/update-visitor-log.dto';

@Injectable()
export class VisitorLogService {
  create(createVisitorLogDto: CreateVisitorLogDto) {
    return 'This action adds a new visitorLog';
  }

  findAll() {
    return `This action returns all visitorLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitorLog`;
  }

  update(id: number, updateVisitorLogDto: UpdateVisitorLogDto) {
    return `This action updates a #${id} visitorLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitorLog`;
  }
}
