import { Body, Controller, Get } from '@nestjs/common';
import { MockUser } from '../../schemas/mock-user.schema';
import { MockUserService } from '../../services/mock-user/mock-user.service';
import { FindUserDto } from '../../tickets/dtos/find-user';

@Controller('mockUser')
export class MockUserController {
  constructor(private mockUserService: MockUserService) {}

  @Get()
  async findAll(@Body() findUser: FindUserDto): Promise<MockUser[]> {
    return this.mockUserService.find(findUser);
  }
}
