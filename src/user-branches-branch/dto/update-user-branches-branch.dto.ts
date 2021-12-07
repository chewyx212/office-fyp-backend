import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBranchesBranchDto } from './create-user-branches-branch.dto';

export class UpdateUserBranchesBranchDto extends PartialType(CreateUserBranchesBranchDto) {}
