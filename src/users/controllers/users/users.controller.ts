import { Body, Controller, Post, Get, Param, Query } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy)
    return [{ id: 1, username: 'john' }];
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData)
    return {};
  }

  @Get(":id/:postId")
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    return { id, postId };
  }

}
