import { Injectable } from '@nestjs/common';
import { CreateDeskDto } from './dto/create-desk.dto';
import { UpdateDeskDto } from './dto/update-desk.dto';

@Injectable()
export class DeskService {
  create(createDeskDto: CreateDeskDto) {
    return 'This action adds a new desk';
  }

  findAll() {
    return `This action returns all desk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} desk`;
  }

  update(id: number, updateDeskDto: UpdateDeskDto) {
    return `This action updates a #${id} desk`;
  }

  remove(id: number) {
    return `This action removes a #${id} desk`;
  }
}
