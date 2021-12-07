import { UserBranchesBranch } from '../user-branches-branch/user-branches-branch.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Company } from 'src/company/company.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  email_verified: boolean;

  @OneToOne(() => Company, (company) => company.owner)
  @JoinColumn()
  company: Company;

  @OneToMany(() => UserBranchesBranch, (branch) => branch.user)
  @JoinColumn()
  branches: UserBranchesBranch[];
}
