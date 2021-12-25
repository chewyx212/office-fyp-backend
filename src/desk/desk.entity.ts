import { DeskSchedule } from './../desk-schedule/desk-schedule.entity';
import { Area } from 'src/area/area.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Desk {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  status: boolean;

  @ManyToOne(() => Area, (area) => area.desks)
  @JoinColumn()
  area: Area;

  @OneToMany(() => DeskSchedule, (schedule) => schedule.desk, {
    eager: true,
  })
  @JoinColumn()
  schedules: DeskSchedule;
}
