import { RoomSchedule } from './../room-schedule/room-schedule.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class VisitorLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;
}
