import { Test, TestingModule } from '@nestjs/testing';
import { MockUserController } from './mock-user.controller';

describe('MockUserController', () => {
  let controller: MockUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockUserController],
    }).compile();

    controller = module.get<MockUserController>(MockUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
