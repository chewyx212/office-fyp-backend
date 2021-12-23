import { Test, TestingModule } from '@nestjs/testing';
import { DeskScheduleController } from './desk-schedule.controller';
import { DeskScheduleService } from './desk-schedule.service';

describe('DeskScheduleController', () => {
  let controller: DeskScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeskScheduleController],
      providers: [DeskScheduleService],
    }).compile();

    controller = module.get<DeskScheduleController>(DeskScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
