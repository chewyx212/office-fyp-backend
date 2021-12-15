import { UserBranchesBranch } from '../user-branches-branch/user-branches-branch.entity';
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
import { Exclude } from 'class-transformer';
import { User } from 'src/auth/user.entity';
import { Company } from 'src/company/company.entity';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => Company, (company) => company.branches, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  company: Company;

  @OneToMany(() => UserBranchesBranch, (user) => user.branch)
  @JoinColumn()
  users: UserBranchesBranch[];
}
