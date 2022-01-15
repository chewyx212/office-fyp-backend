import { Test, TestingModule } from '@nestjs/testing';
import { VisitorLogController } from './visitor-log.controller';
import { VisitorLogService } from './visitor-log.service';

describe('VisitorLogController', () => {
  let controller: VisitorLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisitorLogController],
      providers: [VisitorLogService],
    }).compile();

    controller = module.get<VisitorLogController>(VisitorLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
