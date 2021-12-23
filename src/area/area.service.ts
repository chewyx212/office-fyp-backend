import { FindAreaDto } from './dto/find-area.dto';
import { BranchRepository } from './../branch/branch.repository';
import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyRepository } from 'src/company/company.repository';
import { AreaRepository } from './area.repository';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { User } from 'src/auth/user.entity';
import { UserBranchesBranchRepository } from 'src/user-branches-branch/user-branches-branch.repository';
import { find } from 'rxjs';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(AreaRepository)
    private areaRepository: AreaRepository,
    @InjectRepository(CompanyRepository)
    private companyRepository: CompanyRepository,
    @InjectRepository(BranchRepository)
    private branchRepository: BranchRepository,
    @InjectRepository(UserBranchesBranchRepository)
    private userBranchesBranchRepository: UserBranchesBranchRepository,
  ) {}

  async create(user: User, createAreaDto: CreateAreaDto) {
    const { branchId } = createAreaDto;
    const branch = await this.branchRepository.findOne({ id: branchId });
    if (!branch) {
      throw new NotFoundException('Branch Not Found');
    }
    const checkAdmin = await this.userBranchesBranchRepository.findOne({
      user,
      branch,
    });
    let gotPermission = checkAdmin && checkAdmin.is_admin;
    if (!checkAdmin || !checkAdmin.is_admin) {
      const company = await this.companyRepository.getCompany(user);
      if (company) {
        const isExisted = await this.branchRepository.findOne({
          id: branchId,
          company,
        });
        if (isExisted) {
          gotPermission = true;
        }
      }
    }
    if (gotPermission) {
      return this.areaRepository.createArea(branch, createAreaDto);
    } else {
      throw new UnauthorizedException('You have no permission to create');
    }
  }

  async findAll(user: User, findAreaDto: FindAreaDto) {
    const { branchId } = findAreaDto;
    const branch = await this.branchRepository.findOne({ id: branchId });
    if (!branch) {
      throw new NotFoundException('Branch Not Found');
    }
    const checkAdmin = await this.userBranchesBranchRepository.findOne({
      user,
      branch,
    });
    let gotPermission = checkAdmin && checkAdmin.is_admin;
    if (!checkAdmin || !checkAdmin.is_admin) {
      const company = await this.companyRepository.getCompany(user);
      if (company) {
        const isExisted = await this.branchRepository.findOne({
          id: branchId,
          company,
        });
        if (isExisted) {
          gotPermission = true;
        }
      }
    }
    if (gotPermission) {
      return this.areaRepository.find({ branch });
    } else {
      throw new UnauthorizedException('You have no permission to view');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} area`;
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}