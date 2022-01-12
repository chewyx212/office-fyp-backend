import { RoomSchedule } from './room-schedule.entity';
import { CreateRoomScheduleDto } from './dto/create-room-schedule.dto';
import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Branch } from 'src/branch/branch.entity';
import { Room } from 'src/room/room.entity';
import { User } from 'src/auth/user.entity';

@EntityRepository(RoomSchedule)
export class RoomScheduleRepository extends Repository<RoomSchedule> {
  async createRoomSchedule(createRoomScheduleDetail: {
    room: Room;
    user: User;
    duration: number;
    datetime: Date;
  }) {
    const roomSchedule = this.create(createRoomScheduleDetail);
    try {
      await this.save(roomSchedule);
    } catch (error) {
      if (error.errno === 1062) {
        throw new ConflictException('already registered');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return roomSchedule;
  }
}
