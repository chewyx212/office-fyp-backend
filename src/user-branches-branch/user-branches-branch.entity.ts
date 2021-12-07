import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/auth/user.entity';
import { Branch } from 'src/branch/branch.entity';

@Entity()
export class UserBranchesBranch {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.branches, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Branch, (branch) => branch.user, { onDelete: 'CASCADE' })
  branch: Branch;

  @Column()
  is_admin: boolean;
}
