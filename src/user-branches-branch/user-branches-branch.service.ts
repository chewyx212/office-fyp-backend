import { Injectable } from '@nestjs/common';
import { CreateUserBranchesBranchDto } from './dto/create-user-branches-branch.dto';
import { UpdateUserBranchesBranchDto } from './dto/update-user-branches-branch.dto';

@Injectable()
export class UserBranchesBranchService {
  create(createUserBranchesBranchDto: CreateUserBranchesBranchDto) {
    return 'This action adds a new userBranchesBranch';
  }

  findAll() {
    return `This action returns all userBranchesBranch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userBranchesBranch`;
  }

  update(id: number, updateUserBranchesBranchDto: UpdateUserBranchesBranchDto) {
    return `This action updates a #${id} userBranchesBranch`;
  }

  remove(id: number) {
    return `This action removes a #${id} userBranchesBranch`;
  }
}
