import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ id: 1, username: 'john' }];
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData)
    return {};
  }
}
