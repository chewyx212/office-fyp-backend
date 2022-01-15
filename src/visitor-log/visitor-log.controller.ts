import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitorLogService } from './visitor-log.service';
import { CreateVisitorLogDto } from './dto/create-visitor-log.dto';
import { UpdateVisitorLogDto } from './dto/update-visitor-log.dto';

@Controller('visitor-log')
export class VisitorLogController {
  constructor(private readonly visitorLogService: VisitorLogService) {}

  @Post()
  create(@Body() createVisitorLogDto: CreateVisitorLogDto) {
    return this.visitorLogService.create(createVisitorLogDto);
  }

  @Get()
  findAll() {
    return this.visitorLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitorLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisitorLogDto: UpdateVisitorLogDto) {
    return this.visitorLogService.update(+id, updateVisitorLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitorLogService.remove(+id);
  }
}
