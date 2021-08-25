import { UsersRepository } from './../auth/repository/users.repository';
import { OrganizationRepository } from './repository/organization.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { AnnoucementRepository } from './repository/announcement.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrganizationRepository,
      UsersRepository,
      AnnoucementRepository,
    ]),
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule {}
