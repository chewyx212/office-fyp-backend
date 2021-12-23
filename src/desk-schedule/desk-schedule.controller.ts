import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeskScheduleService } from './desk-schedule.service';
import { CreateDeskScheduleDto } from './dto/create-desk-schedule.dto';
import { UpdateDeskScheduleDto } from './dto/update-desk-schedule.dto';

@Controller('desk-schedule')
export class DeskScheduleController {
  constructor(private readonly deskScheduleService: DeskScheduleService) {}

  @Post()
  create(@Body() createDeskScheduleDto: CreateDeskScheduleDto) {
    return this.deskScheduleService.create(createDeskScheduleDto);
  }

  @Get()
  findAll() {
    return this.deskScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deskScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeskScheduleDto: UpdateDeskScheduleDto) {
    return this.deskScheduleService.update(+id, updateDeskScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deskScheduleService.remove(+id);
  }
}
