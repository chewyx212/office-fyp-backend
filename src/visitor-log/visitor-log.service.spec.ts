import { Test, TestingModule } from '@nestjs/testing';
import { VisitorLogService } from './visitor-log.service';

describe('VisitorLogService', () => {
  let service: VisitorLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisitorLogService],
    }).compile();

    service = module.get<VisitorLogService>(VisitorLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
