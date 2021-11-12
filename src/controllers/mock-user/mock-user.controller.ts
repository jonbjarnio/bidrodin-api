import { Controller, Get } from '@nestjs/common';
import { MockUser } from '../../schemas/mock-user.schema';
import { MockUserService } from '../../services/mock-user/mock-user.service';

@Controller('mockUser')
export class MockUserController {
  constructor(private mockUserService: MockUserService) {}

  @Get()
  async findAll(): Promise<MockUser[]> {
    return this.mockUserService.find();
  }
}
