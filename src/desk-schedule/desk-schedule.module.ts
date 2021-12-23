import { Module } from '@nestjs/common';
import { DeskScheduleService } from './desk-schedule.service';
import { DeskScheduleController } from './desk-schedule.controller';

@Module({
  controllers: [DeskScheduleController],
  providers: [DeskScheduleService]
})
export class DeskScheduleModule {}
