import { Organization } from './organization.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: boolean;

  @ManyToOne(() => Organization, (organization) => organization.areas, {
    onDelete: 'CASCADE',
  })
  organization: Organization;
}
