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
import { User } from 'src/auth/user.entity';
import { Branch } from 'src/branch/branch.entity';
import { Desk } from 'src/desk/desk.entity';

@Entity()
export class DeskSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: boolean;

  @ManyToOne(() => User, (user) => user.deskSchedules)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Desk, (desk) => desk.schedules)
  @JoinColumn()
  desk: Desk;
}
