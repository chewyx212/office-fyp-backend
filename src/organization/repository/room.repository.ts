import { Room } from './../entity/room.entity';

import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {}
