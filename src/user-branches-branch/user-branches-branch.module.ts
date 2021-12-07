import { Module } from '@nestjs/common';
import { UserBranchesBranchService } from './user-branches-branch.service';
import { UserBranchesBranchController } from './user-branches-branch.controller';

@Module({
  controllers: [UserBranchesBranchController],
  providers: [UserBranchesBranchService]
})
export class UserBranchesBranchModule {}
