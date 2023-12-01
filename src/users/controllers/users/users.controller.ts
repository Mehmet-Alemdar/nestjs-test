import { Body, Controller, Post, Get, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortBy', ParseBoolPipe) sortBy: boolean) {
    console.log(sortBy)
    return [{ id: 1, username: 'john' }];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData)
    return {userData};
  }

  @Get(":id/:postId")
  getUserById(@Param('id', ParseIntPipe) id: number, @Param('postId') postId: string) {
    return { id, postId };
  }

}
