import { Organization } from './organization.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: boolean;

  @ManyToOne(() => Organization, (organization) => organization.rooms, {
    onDelete: 'CASCADE',
  })
  organization: Organization;
}
