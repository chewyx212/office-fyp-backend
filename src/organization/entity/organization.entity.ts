import { Announcement } from './announcement.entity';
import { User } from '../../auth/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToMany(() => User, (user) => user.ownOrganizations)
  admins: User[];

  @ManyToMany(() => User, (user) => user.organizations)
  users: User[];

  @OneToMany(() => Announcement, (annoucement) => annoucement.organization)
  announcements: Announcement[];
}
