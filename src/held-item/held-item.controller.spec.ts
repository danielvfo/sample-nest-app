import { Test, TestingModule } from '@nestjs/testing';
import { HeldItemController } from './held-item.controller';

describe('HeldItemController', () => {
  let controller: HeldItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeldItemController],
    }).compile();

    controller = module.get<HeldItemController>(HeldItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
