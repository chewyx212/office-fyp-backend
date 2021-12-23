import { Test, TestingModule } from '@nestjs/testing';
import { DeskScheduleService } from './desk-schedule.service';

describe('DeskScheduleService', () => {
  let service: DeskScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeskScheduleService],
    }).compile();

    service = module.get<DeskScheduleService>(DeskScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
