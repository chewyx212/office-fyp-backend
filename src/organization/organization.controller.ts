import { Announcement } from './entity/announcement.entity';
import {
  CreateOrganizationDto,
  CreateAnnoucementDto,
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

  //   @Get('/annoucement/:id')
  //   getAllAnnoucementById(@Body('id') id: string): Promise<Announcement[]> {
  //     return this.organizationService.getAllAnnoucementById(id);
  //   }
}
