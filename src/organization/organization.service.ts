import { Room } from './entity/room.entity';
import { RoomRepository } from './repository/room.repository';
import { AreaRepository } from './repository/area.repository';
import { Area } from './entity/area.entity';
import { Announcement } from './entity/announcement.entity';
import { UsersRepository } from './../auth/repository/users.repository';
import {
  CreateOrganizationDto,
  CreateAnnoucementDto,
  CreateDto,
  AddMemberDto,
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
    @InjectRepository(AreaRepository)
    private areaRepo: AreaRepository,
    @InjectRepository(RoomRepository)
    private roomRepo: RoomRepository,
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
    user.organizations.push(organization);
    user.ownOrganizations.push(organization);
    await this.userRepo.save(user);
    return organization;
  }
  async getUserOrganization(user: User): Promise<User> {
    return user;
  }
  async getOrganizationById(id: string): Promise<Organization> {
    // const organization = await this.organizationRepo.findOne(id);
    const organization = await this.organizationRepo
      .createQueryBuilder('organization')
      .where('organization.id =:id', { id })
      .leftJoinAndSelect('organization.users', 'user')
      .getOne();
    return organization;
  }
  async addOrganizationMember(addMemberDto: AddMemberDto): Promise<any> {
    const { email, organizationId } = addMemberDto;
    const myOrganization = await this.organizationRepo.findOne({
      id: organizationId,
    });
    console.log(myOrganization);
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

  async createArea(areaDto: CreateDto): Promise<Area> {
    const { name, organizationId } = areaDto;
    const organization = await this.organizationRepo.findOne({
      id: organizationId,
    });
    console.log(organization);
    const area = this.areaRepo.create({
      name,
      organization,
    });
    return await this.areaRepo.save(area);
  }

  async getAllArea(organizationId: string): Promise<Area[]> {
    const organization = await this.organizationRepo.findOne({
      id: organizationId,
    });
    const query = this.areaRepo.createQueryBuilder('area');
    query.where({ organization });
    const area = await query.getMany();
    return area;
  }
  async createRoom(roomDto: CreateDto): Promise<Room> {
    const { name, organizationId } = roomDto;
    const organization = await this.organizationRepo.findOne({
      id: organizationId,
    });
    console.log(organization);
    const area = this.roomRepo.create({
      name,
      organization,
    });
    return await this.roomRepo.save(area);
  }

  async getAllRoom(organizationId: string): Promise<Room[]> {
    const organization = await this.organizationRepo.findOne({
      id: organizationId,
    });
    const query = this.roomRepo.createQueryBuilder('room');
    query.where({ organization });
    const room = await query.getMany();
    return room;
  }
}
