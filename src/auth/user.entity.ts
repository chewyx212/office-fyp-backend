import { Organization } from '../organization/entity/organization.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  email_verified: boolean;

  @ManyToMany(() => UserRole, (role) => role.user)
  @JoinTable()
  // Employee == 1
  // Admin == 2
  role: UserRole[];

  @ManyToMany(() => Organization, (organization) => organization.users, {
    eager: true,
  })
  @JoinTable()
  organizations: Organization[];

  @ManyToMany(() => Organization, (organization) => organization.admins, {
    eager: true,
  })
  @JoinTable()
  ownOrganizations: Organization[];
}

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.role)
  user: User[];
}
