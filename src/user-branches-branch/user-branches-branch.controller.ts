import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserBranchesBranchService } from './user-branches-branch.service';
import { CreateUserBranchesBranchDto } from './dto/create-user-branches-branch.dto';
import { UpdateUserBranchesBranchDto } from './dto/update-user-branches-branch.dto';

@Controller('user-branches-branch')
export class UserBranchesBranchController {
  constructor(private readonly userBranchesBranchService: UserBranchesBranchService) {}

  @Post()
  create(@Body() createUserBranchesBranchDto: CreateUserBranchesBranchDto) {
    return this.userBranchesBranchService.create(createUserBranchesBranchDto);
  }

  @Get()
  findAll() {
    return this.userBranchesBranchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBranchesBranchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserBranchesBranchDto: UpdateUserBranchesBranchDto) {
    return this.userBranchesBranchService.update(+id, updateUserBranchesBranchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userBranchesBranchService.remove(+id);
  }
}
