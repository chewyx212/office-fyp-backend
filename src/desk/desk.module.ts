import { Module } from '@nestjs/common';
import { DeskService } from './desk.service';
import { DeskController } from './desk.controller';

@Module({
  controllers: [DeskController],
  providers: [DeskService]
})
export class DeskModule {}
