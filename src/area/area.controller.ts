import { FindAreaDto } from './dto/find-area.dto';
import { GetUser } from './../auth/get-user.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { User } from 'src/auth/user.entity';

@UseGuards(AuthGuard())
@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post()
  create(@GetUser() user: User, @Body() createAreaDto: CreateAreaDto) {
    return this.areaService.create(user, createAreaDto);
  }

  @Get()
  findAll(@GetUser() user: User, @Body() findAreaDto: FindAreaDto) {
    return this.areaService.findAll(user, findAreaDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.areaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areaService.update(+id, updateAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.areaService.remove(+id);
  }
}
