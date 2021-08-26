import { Room } from './entity/room.entity';
import { Area } from './entity/area.entity';
import { Announcement } from './entity/announcement.entity';
import {
  CreateOrganizationDto,
  CreateAnnoucementDto,
  CreateDto,
} from './dto/organization.dto';
import { Organization } from './entity/organization.entity';
import { User } from 'src/auth/user.entity';
import { GetUser } from './../auth/get-user.decorator';
import { OrganizationService } from './organization.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('organization')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) {}

  @Get()
  getOrganization(@GetUser() user: User): Promise<Organization[]> {
    return this.organizationService.getOrganization(user);
  }
  @Post()
  createOrganization(
    @Body() createOrganizationDto: CreateOrganizationDto,
    @GetUser() user: User,
  ): Promise<Organization> {
    return this.organizationService.createOrganization(
      user,
      createOrganizationDto,
    );
  }
  @Post('/annoucement')
  createAnnoucement(
    @Body() annoucementDto: CreateAnnoucementDto,
  ): Promise<Announcement> {
    return this.organizationService.createAnnoucement(annoucementDto);
  }

  @Get('/annoucement')
  getAllAnnoucementById(
    @Body('organizationId') organizationId: string,
  ): Promise<Announcement[]> {
    return this.organizationService.getAllAnnoucementById(organizationId);
  }

  @Post('/area')
  createArea(@Body() areaDto: CreateDto): Promise<Area> {
    return this.organizationService.createArea(areaDto);
  }

  @Get('/area')
  getAllArea(@Body('organizationId') organizationId: string): Promise<Area[]> {
    return this.organizationService.getAllArea(organizationId);
  }

  @Post('/room')
  createRoom(@Body() roomDto: CreateDto): Promise<Room> {
    return this.organizationService.createRoom(roomDto);
  }

  @Get('/room')
  getAllRoom(@Body('organizationId') organizationId: string): Promise<Room[]> {
    return this.organizationService.getAllRoom(organizationId);
  }
}
