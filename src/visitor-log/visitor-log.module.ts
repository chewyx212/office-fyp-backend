import { Module } from '@nestjs/common';
import { VisitorLogService } from './visitor-log.service';
import { VisitorLogController } from './visitor-log.controller';

@Module({
  controllers: [VisitorLogController],
  providers: [VisitorLogService]
})
export class VisitorLogModule {}
