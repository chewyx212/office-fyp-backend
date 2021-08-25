import { Announcement } from './entity/announcement.entity';
import { UsersRepository } from './../auth/repository/users.repository';
import {
  CreateOrganizationDto,
  CreateAnnoucementDto,
} from './dto/organization.dto';
import { Organization } from './entity/organization.entity';
import { User } from 'src/auth/user.entity';
import { OrganizationRepository } from './repository/organization.repository';
import { Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnoucementRepository } from './repository/announcement.repository';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(OrganizationRepository)
    private organizationRepo: OrganizationRepository,

    @InjectRepository(UsersRepository)
    private userRepo: UsersRepository,
    @InjectRepository(AnnoucementRepository)
    private annoucementRepo: AnnoucementRepository,
  ) {}

  async createOrganization(
    user: User,
    createOrganizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    console.log(user);
    console.log(createOrganizationDto);
    const { name, address } = createOrganizationDto;
    const data = await this.organizationRepo.create({
      name,
      address,
    });
    const organization = await this.organizationRepo.save(data);
    console.log(organization);
    const myUser = await this.userRepo.findOne(user, {
      relations: ['organizations', 'ownOrganizations'],
    });
    myUser.organizations.push(organization);
    myUser.ownOrganizations.push(organization);
    await this.userRepo.save(myUser);
    return organization;
  }
  async getOrganization(user: User): Promise<Organization[]> {
    const result = await this.userRepo.findOne(user, {
      relations: ['organizations'],
    });
    return result.organizations;
  }

  async createAnnoucement(
    annoucementDto: CreateAnnoucementDto,
  ): Promise<Announcement> {
    const { title, description, organizationId } = annoucementDto;
    const organization = await this.organizationRepo.findOne({
      id: organizationId,
    });
    console.log(organization);
    const annoucement = this.annoucementRepo.create({
      title,
      description,
      organization,
    });
    return await this.annoucementRepo.save(annoucement);
  }

  async getAllAnnoucementById(organizationId: string): Promise<Announcement[]> {
    const organization = await this.organizationRepo.findOne({
      id: organizationId,
    });
    const query = this.annoucementRepo.createQueryBuilder('annoucement');
    query.where({ organization });
    const annoucements = await query.getMany();
    return annoucements;
  }
}
