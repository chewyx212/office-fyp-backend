import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyRepository } from 'src/company/company.repository';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyRepository)
    private companyRepo: CompanyRepository,
  ) {}

  create(createCompanyDto: CreateCompanyDto, user: User): Promise<Company> {
    return this.companyRepo.createCompany(createCompanyDto, user);
  }

  findAll(user: User): Promise<Company[]> {
    return this.companyRepo.getCompany(user);
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
