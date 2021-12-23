import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CompanyRepository } from 'src/company/company.repository';
import { BranchRepository } from 'src/branch/branch.repository';
import { UserBranchesBranchRepository } from 'src/user-branches-branch/user-branches-branch.repository';
import { AreaRepository } from './area.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AreaRepository,
      BranchRepository,
      CompanyRepository,
      UserBranchesBranchRepository,
    ]),
    AuthModule,
  ],
  controllers: [AreaController],
  providers: [AreaService],
})
export class AreaModule {}
