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

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  detail: string;

  @Column()
  status: boolean;

  @ManyToOne(() => Branch, (branch) => branch.rooms)
  @JoinColumn()
  branch: Branch;
}
